from http.server import BaseHTTPRequestHandler
import json
import os
from catboost import CatBoostClassifier

# تهيئة النموذج في النطاق العام (Global Scope) 
# بحيث يحتفظ Vercel Serverless Function بالنموذج في الذاكرة المؤقتة لطلبات أسرع
model = CatBoostClassifier()
model_path = os.path.join(os.path.dirname(__file__), 'final_catboost_model.cbm')

try:
    model.load_model(model_path)
    IS_READY = True
except Exception as e:
    IS_READY = False
    ERROR_MSG = str(e)

class handler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        # للتعامل مع طلبات CORS Preflight من المتصفح
        self._set_headers(200)

    def do_POST(self):
        if not IS_READY:
            self._set_headers(500)
            self.wfile.write(json.dumps({
                "error": "Failed to load CatBoost model", 
                "details": ERROR_MSG
            }).encode('utf-8'))
            return

        content_length = int(self.headers.get('Content-Length', 0))
        if content_length == 0:
            self._set_headers(400)
            self.wfile.write(json.dumps({"error": "Empty request body"}).encode('utf-8'))
            return

        try:
            # قراءة ومعالجة البيانات القادمة من الواجهة
            post_body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(post_body)
            features = data.get('features')

            if not features or not isinstance(features, list):
                self._set_headers(400)
                self.wfile.write(json.dumps({
                    "error": "Invalid payload. 'features' must be provided as a list."
                }).encode('utf-8'))
                return

            # إجراء الاستدلال الحي (Real-time Inference) 
            prediction = model.predict([features])
            probabilities = model.predict_proba([features])

            # تجهيز المخرجات (تحويل من Numpy Arrays إلى قوائم Python عادية لتتناسب مع JSON)
            pred_class = prediction[0].tolist() if hasattr(prediction[0], 'tolist') else prediction[0]
            if isinstance(pred_class, list) and len(pred_class) > 0:
                pred_class = pred_class[0]

            probs_list = probabilities[0].tolist() if hasattr(probabilities[0], 'tolist') else list(probabilities[0])

            result = {
                "prediction": pred_class,
                "probabilities": probs_list
            }

            self._set_headers(200)
            self.wfile.write(json.dumps(result).encode('utf-8'))

        except Exception as e:
            self._set_headers(500)
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
