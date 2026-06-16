import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AlertCircle, ArrowDownRight, ArrowUpRight, AlertTriangle } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Pie,
  PieChart
} from "recharts";

// --- TYPES ---
export interface Stat {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  isUrgent?: boolean;
}

export interface MetricItem {
  name?: string;
  category?: string;
  issue?: string;
  code?: string;
  count: number;
  value: number;
  color?: string;
  details?: string;
}

export interface EvidenceIssue {
  issue: string;
  code: string;
  count: number;
  negativeCount: number;
  negativeRate: number;
  contextReviewRate: number;
  reportingInterpretation: string;
}

export interface ExecutiveDecision {
  priority: number;
  axis: string;
  reason: string;
  action: string;
  urgency: string;
}

export interface DashboardData {
  overview: Stat[];
  sentimentLabel: MetricItem[];
  contextualPolarity: MetricItem[];
  finalSentiment: MetricItem[];
  emotions: MetricItem[];
  intentPrimary: MetricItem[];
  speechAct: MetricItem[];
  ceoIssues: MetricItem[];
  ceoIssueAxes: MetricItem[];
  evidenceBackedIssues: EvidenceIssue[];
  executiveDecisions: ExecutiveDecision[];
}

// --- DATA ---
export const data: DashboardData = {
  overview: [
    { label: "إجمالي حجم التفاعلات المرصودة", value: "3,809", isUrgent: false },
    { label: "معدل الحيود السلبي المؤكد (المبني على الأدلة)", value: "12.7%", trend: "down", trendValue: "12.7%", isUrgent: true },
    { label: "قائمة انتظار المراجعة السياقية", value: "0", isUrgent: false },
    { label: "رصيد الأصول الإيجابية للعلامة", value: "3,221", isUrgent: false },
    { label: "مؤشر رضا العملاء العام (CSAT)", value: "51.0%", isUrgent: false },
    { label: "مؤشر الجهد التشغيلي (Friction Index)", value: "13.67%", isUrgent: true },
    { label: "مؤشر التصعيد الحرج (Severe Dissatisfaction)", value: "30.40%", isUrgent: true },
    { label: "معدل عيوب جودة المنتج (Product Quality Defect Rate)", value: "33.80%", isUrgent: true }
  ],
  sentimentLabel: [
    { name: "إيجابي جداً", count: 2467, value: 64.7677, color: "#198038" },
    { name: "إيجابي", count: 735, value: 19.2964, color: "#24a148" },
    { name: "سلبي جداً", count: 216, value: 5.6708, color: "#a2191f" },
    { name: "سلبي", count: 208, value: 5.4608, color: "#da1e28" },
    { name: "محايد", count: 148, value: 3.8855, color: "#8d8d8d" },
    { name: "غير واضح", count: 25, value: 0.6563, color: "#525252" },
    { name: "مختلط", count: 10, value: 0.2625, color: "#f1c21b" }
  ],
  contextualPolarity: [
    { name: "إيجابي", count: 3149, value: 82.6726 },
    { name: "سلبي", count: 357, value: 9.3725 },
    { name: "محايد", count: 212, value: 5.5658 },
    { name: "غير واضح", count: 48, value: 1.2602 },
    { name: "مختلط", count: 43, value: 1.1289 }
  ],
  finalSentiment: [
    { name: "تجارب إيجابية مُحققة", code: "positive", count: 1530, value: 51.00, color: "#198038" },
    { name: "تجارب محايدة (Passive)", code: "neutral", count: 1060, value: 35.33, color: "#8d8d8d" },
    { name: "تجارب سلبية (Detractors)", code: "negative", count: 314, value: 10.47, color: "#da1e28" },
    { name: "تجارب مركبة (Mixed)", code: "mixed", count: 96, value: 3.20, color: "#f1c21b" }
  ],
  emotions: [
    { name: "رضا صريح", code: "satisfaction", count: 1252, value: 41.73, color: "#198038" },
    { name: "حياد تشغيلي", code: "neutral", count: 836, value: 27.87, color: "#8d8d8d" },
    { name: "احتكاك تشغيلي (إحباط)", code: "frustration", count: 461, value: 15.37, color: "#f1c21b" },
    { name: "استياء حرج (غضب)", code: "anger", count: 451, value: 15.03, color: "#da1e28" }
  ],
  evidenceBackedIssues: [
    { issue: "مخرجات مراقبة الجودة (QA)", code: "product_quality", count: 322, negativeCount: 317, negativeRate: 98.4472, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "انحرافات المقاسات والملاءمة", code: "size_fit", count: 50, negativeCount: 47, negativeRate: 94.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "عدم تطابق المواصفات", code: "product_mismatch", count: 48, negativeCount: 45, negativeRate: 93.75, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "تأكيدات إيجابية (Affirmations)", code: "positive_praise", count: 3263, negativeCount: 27, negativeRate: 0.8275, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "التسعير وعرض القيمة", code: "price_offer", count: 28, negativeCount: 23, negativeRate: 82.14, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "العمليات اللوجستية والتوصيل", code: "shipping_delivery", count: 8, negativeCount: 6, negativeRate: 75.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "استعلامات وطلبات دعم", code: "question", count: 23, negativeCount: 6, negativeRate: 26.08, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "بيانات ضبابية (غير مصنفة)", code: "unclear", count: 51, negativeCount: 5, negativeRate: 9.80, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "تصعيدات خدمة العملاء (CS)", code: "customer_support", count: 3, negativeCount: 3, negativeRate: 100.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "اللوجستيات العكسية (الاسترجاع)", code: "return_refund", count: 2, negativeCount: 2, negativeRate: 100.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "متفرقات تشغيلية", code: "other", count: 10, negativeCount: 2, negativeRate: 20.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" },
    { issue: "تحديات بوابات الدفع", code: "payment", count: 1, negativeCount: 1, negativeRate: 100.00, contextReviewRate: 0.0, reportingInterpretation: "evidence_backed_context_issue" }
  ],
  intentPrimary: [
    { name: "تأكيد أصالة العلامة التجارية (Brand Authenticity Validation)", code: "brand_authenticity_praise", count: 1110, value: 37.00 },
    { name: "ملاحظات عامة حول المنتج (General Product Feedback)", code: "product_feedback", count: 990, value: 33.00 },
    { name: "تصعيد يخص الجودة (Quality Assurance Escalation)", code: "quality_complaint", count: 666, value: 22.20 },
    { name: "تقرير عدم تطابق المواصفات (Product Discrepancy Report)", code: "mismatch_report", count: 81, value: 2.70 },
    { name: "إشادة مباشرة بالمنتج (Direct Product Endorsement)", code: "product_praise", count: 23, value: 0.77 },
    { name: "رصد عيب تصنيعي (Product Defect Identification)", code: "product_quality_issue", count: 23, value: 0.77 },
    { name: "انطباع إيجابي للتجربة (Positive UX)", code: "positive_feedback", count: 23, value: 0.77 },
    { name: "تحديات الدعم الفني والتشغيل (Installation & Support Friction)", code: "installation_support_problem", count: 23, value: 0.77 },
    { name: "بلاغ عن خلل تشغيلي (Product Anomaly Report)", code: "report_product_issue", count: 13, value: 0.43 },
    { name: "عدم تطابق معايير المنتج (Specifications Mismatch)", code: "product_mismatch", count: 12, value: 0.40 },
    { name: "إشادة إيجابية بالخدمة (Positive Service Endorsement)", code: "positive_praise", count: 12, value: 0.40 },
    { name: "شكوى رسمية للمنتج (Product Grievance)", code: "product_complaint", count: 12, value: 0.40 },
    { name: "شكوى تشغيلية عامة (General Service Grievance)", code: "complaint", count: 12, value: 0.40 }
  ],
  speechAct: [
    { name: "إشادة (Endorsement)", code: "praise", count: 1534, value: 51.13, color: "#198038" },
    { name: "ملاحظة عامة (General Observation)", code: "general", count: 644, value: 21.47, color: "#8d8d8d" },
    { name: "تقييم مركب: إشادة + احتكاك (Mixed Feedback)", code: "praise_and_complaint", count: 300, value: 10.00, color: "#f1c21b" },
    { name: "نقد بناء (Constructive Criticism)", code: "praise_and_criticism", count: 300, value: 10.00, color: "#f1c21b" },
    { name: "تصعيد مباشر (Direct Escalation)", code: "complaint", count: 150, value: 5.00, color: "#da1e28" },
    { name: "طلب استعلام (Information Request)", code: "question", count: 56, value: 1.87, color: "#8d8d8d" },
    { name: "بيان / موقف (Declarative Statement)", code: "statement", count: 14, value: 0.47, color: "#8d8d8d" },
    { name: "تقييم رسمي للتجربة (Formal Assessment)", code: "evaluation", count: 2, value: 0.07, color: "#8d8d8d" }
  ],
  ceoIssues: [
    { category: "مديح إيجابي", issue: "مديح مباشر للمنتج", count: 1358, value: 45.27 },
    { category: "جودة المنتج", issue: "ضعف جودة المنتج", count: 527, value: 17.57 },
    { category: "المقاسات والملاءمة", issue: "المقاس أصغر من المتوقع", count: 200, value: 6.67 },
    { category: "جودة المنتج", issue: "خامة ضعيفة أو خفيفة", count: 118, value: 3.93 },
    { category: "جودة المنتج", issue: "عمر المنتج قصير", count: 114, value: 3.80 },
    { category: "السعر والعروض", issue: "السعر أعلى من توقع العميل", count: 94, value: 3.13 },
    { category: "غير واضح", issue: "تعليق غير واضح", count: 90, value: 3.00 },
    { category: "جودة المنتج", issue: "منتج به عيب واضح", count: 90, value: 3.00 },
    { category: "المقاسات والملاءمة", issue: "المقاس أكبر من المتوقع", count: 67, value: 2.23 },
    { category: "عدم تطابق المنتج", issue: "لون غير مطابق", count: 63, value: 2.10 },
    { category: "عدم تطابق المنتج", issue: "الصورة لا تطابق المنتج", count: 59, value: 1.97 },
    { category: "جودة المنتج", issue: "المنتج لا يطابق الوصف", count: 59, value: 1.97 },
    { category: "عدم تطابق المنتج", issue: "المنتج لا يطابق الوصف", count: 55, value: 1.83 },
    { category: "جودة المنتج", issue: "رائحة أو ملمس غير مقبول", count: 55, value: 1.83 },
    { category: "جودة المنتج", issue: "مشكلة في جودة اللون", count: 51, value: 1.70 }
  ],
  ceoIssueAxes: [
    { category: "تأكيد مباشر لجودة المنتج", details: "product_praise", count: 1358, value: 45.27 },
    { category: "قصور حرج في الجودة", details: "poor quality + weak material + short lifetime + defective + not described + smell/texture + color quality", count: 1014, value: 33.80 },
    { category: "تحديات توحيد المقاسات", details: "size too small + size too large", count: 267, value: 8.90 },
    { category: "فجوة العرض مقابل الواقع", details: "wrong color + image mismatch + not as described", count: 177, value: 5.90 },
    { category: "حساسية السعر مقابل القيمة", details: "price too high", count: 94, value: 3.13 },
    { category: "بيانات غير مصنفة", details: "unclear", count: 90, value: 3.00 }
  ],
  executiveDecisions: [
    { priority: 1, axis: "مراقبة جودة المنتج (QA)", reason: "أعلى محور شكاوى بعد المديح، ويمثل 33.80%", action: "مراجعة اتفاقيات مستوى الخدمة (SLAs) للموردين، تكثيف فحص الجودة، تحديث مواصفات المنتج، وتحليل أسباب المرتجعات.", urgency: "HIGH" },
    { priority: 2, axis: "المقاسات والملاءمة", reason: "8.90% من العينة، وتؤثر مباشرة على الرضا وتكاليف الإرجاع اللوجستية", action: "توحيد جداول المقاسات (Sizing Guides)، إضافة توصيات ذكية للمقاس، وتوضيح اختلافات القصات بوضوح للمستخدم.", urgency: "HIGH" },
    { priority: 3, axis: "تطابق المواصفات المرئية", reason: "5.90%، يؤثر سلباً على معدل الثقة وتوقعات العميل", action: "عمل تدقيق بصري (Visual Audit) للصور، تحسين الإضاءة والألوان لتطابق الواقع، وتحديث وصف دقيق للمواصفات.", urgency: "HIGH" },
    { priority: 4, axis: "القيمة مقابل السعر", reason: "3.13%", action: "توضيح القيمة المضافة (Value Proposition)، المراجعة التنافسية للتسعير، أو تقديم عروض موجهة.", urgency: "MEDIUM" },
    { priority: 5, axis: "البيانات غير المصنفة", reason: "3.00%", action: "إجراء تدقيق يدوي (Manual Audit) لعينة من البيانات لتحسين خوارزمية التصنيف والاستخراج.", urgency: "LOW" }
  ]
};

// --- COMPONENTS ---
export function Header() {
  return (
    <header className="sticky top-[56px] z-10 bg-white border-b border-[#E0E0E0] shadow-[0_1px_2px_rgba(0,0,0,0.02)] px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-[4px] shrink-0 bg-[#0F62FE] flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm">
          VoC
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-light tracking-tight text-[#161616]">لوحة المخرجات التشخيصية | Arabic VoC E-commerce Diagnostic</h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="hidden sm:inline-block bg-[#F4F4F4] px-4 py-2 rounded-[4px] border border-[#E0E0E0] text-center min-w-[120px]">
          <span className="block text-[10px] uppercase text-[#525252] font-bold tracking-wider mb-1">Data Quality</span>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#198038] -rotate-90" viewBox="0 0 36 36">
              <path className="text-[#E0E0E0]" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-[#198038]" strokeWidth="4" strokeDasharray="93.2, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <span className="text-sm font-mono font-bold leading-none text-[#161616]">93.2%</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function MetricCard({ stat }: { stat: Stat }) {
  return (
    <div className="bg-white border border-[#E0E0E0] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-[6px] p-5 flex flex-col gap-2 relative overflow-hidden group">
      {stat.isUrgent ? (
        <div className="absolute top-0 right-0 w-full h-[3px] bg-[#DA1E28]" />
      ) : (
        <div className="absolute top-0 right-0 w-full h-[3px] bg-[#E0E0E0] group-hover:bg-[#0F62FE] transition-colors" />
      )}
      <span className="text-[#525252] text-[11px] font-semibold tracking-wide uppercase mt-1">{stat.label}</span>
      <div className="flex items-end justify-between mt-2">
        <span className={`text-4xl font-light tracking-tight ${stat.isUrgent ? 'text-[#DA1E28]' : 'text-[#161616]'}`}>{stat.value}</span>
      </div>
      {stat.trend && (
        <div className="flex items-center gap-1 mt-2">
          {stat.trend === "up" ? (
             <span className="text-[#DA1E28] flex items-center text-[11px] font-medium bg-[#FFF1F1] px-1.5 py-0.5 rounded-[2px]">
               <ArrowUpRight className="w-3 h-3 mr-1" />
               <span className="truncate">{stat.trendValue}</span>
             </span>
          ) : stat.trend === "down" ? (
             <span className="text-[#198038] flex items-center text-[11px] font-medium bg-[#DEFBE6] px-1.5 py-0.5 rounded-[2px]">
               <ArrowDownRight className="w-3 h-3 mr-1" />
               <span className="truncate">{stat.trendValue}</span>
             </span>
          ) : null}
        </div>
      )}
    </div>
  );
}

const PIE_COLORS: Record<string, string> = {
  "إيجابي جداً": "#198038",
  "إيجابي": "#24a148",
  "رضا واضح": "#198038",
  "تجربة إيجابية": "#198038",
  "سلبي جداً": "#a2191f",
  "سلبي": "#da1e28",
  "تجربة سلبية": "#da1e28",
  "غضب": "#a2191f",
  "محايد": "#8d8d8d",
  "تجربة محايدة": "#8d8d8d",
  "حياد": "#8d8d8d",
  "تعبير عام": "#8d8d8d",
  "غير واضح": "#525252",
  "مختلط": "#f1c21b",
  "تجربة مختلطة": "#f1c21b",
  "إحباط": "#f1c21b",
  "سؤال": "#0f62fe"
};

export function SentimentChart({ chartData, title = "توزيع المشاعر" }: { chartData: any[], title?: string }) {
  return (
    <div className="bg-white border border-[#E0E0E0] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-[6px] h-full flex flex-col overflow-hidden">
      <div className="bg-[#F4F4F4] py-3 px-4 border-b border-[#E0E0E0] flex justify-between items-center">
        <h2 className="font-semibold text-[#161616] text-sm">{title}</h2>
      </div>
      <div className="p-4 flex-1 flex flex-col relative w-full h-full min-h-[250px]">
        <div className="flex-1 min-h-[200px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={60}
                outerRadius={85}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
                animationBegin={0}
                animationDuration={800}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || PIE_COLORS[entry.name] || '#A8A8A8'} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#E0E0E0", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                itemStyle={{ color: "#161616", fontSize: "12px", fontFamily: "inherit" }}
                formatter={(value: number, name: string, props: any) => [`${value}% (${props.payload.count})`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="block text-2xl font-light text-[#161616]">
                {chartData.find(d => d.name.includes("إيجاب") || d.code?.includes("positive") || d.code?.includes("satisfaction"))?.value ? 
                  Math.round(chartData.reduce((acc, curr) => (curr.name.includes("إيجاب") || curr.code?.includes("positive") || curr.code?.includes("satisfaction")) ? acc + curr.value : acc, 0))
                  : "--"}%
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-[#525252] mt-1">إيجابية</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-4 px-2">
          {chartData.map((entry, idx) => (
            <div key={idx} className="flex items-center gap-1.5 min-w-[70px]">
              <div className="w-2 h-2 rounded-[2px] shrink-0" style={{ backgroundColor: entry.color || PIE_COLORS[entry.name] || '#A8A8A8' }} />
              <span className="text-xs font-medium text-[#525252] leading-tight">{entry.name} <span className="opacity-70">({Math.round(entry.value)}%)</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopIssues({ sectionData }: { sectionData: EvidenceIssue[] }) {
  return (
    <div className="bg-white border border-[#E0E0E0] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-[6px] h-full flex flex-col overflow-hidden">
      <div className="bg-[#F4F4F4] py-3 px-4 border-b border-[#E0E0E0] flex justify-between items-center">
        <h2 className="font-semibold text-[#161616] text-sm">أبرز المشاكل المبنية على الأدلة (Evidence-Backed Issues)</h2>
        <span className="text-[10px] font-semibold text-[#8C8C8C] uppercase tracking-wider">Phase 26</span>
      </div>
      <div className="flex-1 w-full p-4 overflow-auto">
        <table className="w-full text-sm text-right">
          <thead className="bg-[#F4F4F4] text-[#525252] text-xs uppercase tracking-wider">
            <tr>
              <th className="py-2 px-3 pl-4 border-b border-[#E0E0E0] font-medium text-right">الفئة (Category)</th>
              <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-center">الردود (Count)</th>
              <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-center">الردود السلبية (Negative Count)</th>
              <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-center">معدل السلبية (Negative Rate)</th>
              <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-left">التفسير (Interpretation)</th>
            </tr>
          </thead>
          <tbody>
            {sectionData.map((issue, idx) => (
              <tr key={idx} className="border-b border-[#F4F4F4] hover:bg-[#F7F9FC] transition-colors">
                <td className="py-2.5 px-3 pl-4 text-right text-[#161616] whitespace-nowrap">{issue.issue}</td>
                <td className="py-2.5 px-3 font-mono text-center text-[#525252]">{issue.count}</td>
                <td className="py-2.5 px-3 font-mono text-center text-[#da1e28]">{issue.negativeCount}</td>
                <td className="py-2.5 px-3 font-mono text-center text-[#161616]">
                  {issue.negativeRate.toFixed(2)}%
                </td>
                <td className="py-2.5 px-3 border-b border-[#E0E0E0] text-left text-xs text-[#525252] break-normal">
                  <span className="bg-[#eeece7] text-[#161616] px-2 py-1 rounded-[2px]">{issue.reportingInterpretation}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- MAIN APP ---
const TTabs = [
  "Documentation",
  "Executive Overview",
  "Sentiment & Emotion",
  "Customer Intent",
  "Issues & Root Cause",
  "Actions & Decisions",
];

function CardWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-[#E0E0E0] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-[6px] flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-[#F4F4F4] py-3 px-4 border-b border-[#E0E0E0] flex justify-between items-center">
      <h2 className="font-semibold text-[#161616] text-sm">{title}</h2>
      {subtitle && (
        <span className="text-[10px] font-semibold text-[#8C8C8C] uppercase tracking-wider">
          {subtitle}
        </span>
      )}
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return isMobile;
}

const CustomYAxisTick = (props: any) => {
  const { x, y, width, payload, isMobile } = props;
  const text = payload.value;

  if (isMobile) {
    return (
      <foreignObject x={0} y={y - 28} width={x - 10} height={30}>
        <div
          dir="rtl"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            paddingRight: "4px",
            fontSize: "11px",
            fontWeight: 600,
            color: "#161616",
            lineHeight: 1.2,
          }}
          title={text}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text}
          </span>
        </div>
      </foreignObject>
    );
  }

  // Desktop
  if (typeof text === "string" && text.includes(" (")) {
    const parts = text.split(" (");
    return (
      <foreignObject x={x + 10} y={y - 20} width={280} height={40}>
        <div
          dir="rtl"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          title={text}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#161616",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {parts[0]}
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#525252",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            ({parts[1]}
          </span>
        </div>
      </foreignObject>
    );
  }

  return (
    <foreignObject x={x + 10} y={y - 12} width={280} height={24}>
      <div
        dir="rtl"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          fontSize: "13px",
          fontWeight: 600,
          color: "#161616",
        }}
        title={text}
      >
        <span
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </span>
      </div>
    </foreignObject>
  );
};

function HorizontalBarChart({
  chartData,
  dataKey,
  fill,
  name,
}: {
  chartData: any[];
  dataKey: string;
  fill: string;
  name: string;
}) {
  const isMobile = useIsMobile();
  return (
    <div dir="ltr" style={{ width: "100%" }}>
      <ResponsiveContainer
        width="100%"
        height={Math.max(300, chartData.length * (isMobile ? 70 : 60))}
      >
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 20,
            right: isMobile ? 10 : 300,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
            stroke="#E0E0E0"
          />
          <XAxis
            type="number"
            stroke="#8C8C8C"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            reversed={true}
          />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#161616"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={isMobile ? 1 : 280}
            orientation="right"
            tick={<CustomYAxisTick isMobile={isMobile} />}
          />
          <Tooltip
            cursor={{ fill: "#F4F4F4" }}
            contentStyle={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E0E0E0",
              borderRadius: "4px",
              color: "#161616",
              fontSize: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              direction: "rtl",
              fontFamily: "inherit",
              textAlign: "right",
            }}
            formatter={(value: any, name: string, props: any) => [
              `${value}% (${props.payload.count})`,
              "النسبة",
            ]}
          />
          <Bar
            dataKey={dataKey}
            fill={fill}
            radius={[4, 0, 0, 4]}
            maxBarSize={isMobile ? 16 : 28}
            name={name}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#161616] font-sans pb-0 flex flex-col pt-[56px]" dir="rtl">
      <Header />

      {/* Tabs */}
      <div className="bg-white border-b border-[#E0E0E0] shadow-sm sticky top-[120px] z-10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8">
          <nav
            className="flex space-x-0 space-x-reverse overflow-x-auto hide-scrollbar"
            aria-label="Tabs"
          >
            {TTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`
                        pt-4 pb-3 px-6 text-[13px] font-semibold whitespace-nowrap border-b-[3px] transition-colors
                        ${
                          activeTab === idx
                            ? "border-[#0F62FE] text-[#161616]"
                            : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#E0E0E0]"
                        }
                     `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="w-full mx-auto px-4 sm:px-8 mt-8 space-y-6 flex-1 max-w-[1440px]">
        {/* Tab 0: Documentation */}
        {activeTab === 0 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white border border-[#E0E0E0] shadow-sm rounded-[4px] p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#161616] leading-snug">
                هيكلية مجموعة البيانات المستخدمة في العرض (Egypt Jumia Reviews Dataset - JERD)
              </h2>
              <p className="text-[#525252] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-4xl">
                لإثبات قدرات النظام في العرض العام (Demo Public)، تم استخدام مجموعة بيانات <strong>JERD</strong>. 
                تتكون هذه المجموعة من <strong>3,809 سجل (مراجعة) صالحة بنسبة 100%</strong> دون أي قيم مفقودة. 
                الجدول التالي يوضح الخصائص الهندسية للبيانات التي تم تغذية النظام بها:
              </p>
              
              <div className="overflow-x-auto border border-[#E0E0E0] rounded-[4px] shadow-sm bg-white hide-scrollbar mb-8">
                <table className="w-full text-sm text-right min-w-[700px]">
                  <thead className="bg-[#F4F4F4] text-[#161616] border-b border-[#E0E0E0]">
                    <tr>
                      <th className="px-4 sm:px-6 py-4 font-semibold w-[25%] align-top">اسم الحقل (Column)</th>
                      <th className="px-4 sm:px-6 py-4 font-semibold w-[40%] align-top">الوصف (Description)</th>
                      <th className="px-4 sm:px-6 py-4 font-semibold w-[35%] align-top">الخصائص الإحصائية (Stats)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E0E0E0] text-[#161616]">
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>name_product</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">الاسم الرسمي للمنتج على المنصة.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">878 قيمة فريدة. الأكثر تكراراً (1%):<br/><span dir="ltr" className="inline-block mt-1 bg-[#F4F4F4] px-1.5 py-0.5 rounded text-xs">ADIDAS DBF11 Adilette Aqua</span></td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>url</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">الرابط المباشر لصفحة المنتج.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">913 قيمة فريدة.</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>sku</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">المعرف الفريد للمنتج (كود التخزين). يُستخدم لربط التحليلات بالمنتجات المحددة.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">3,809 قيمة.</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>headline</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">الملخص القصير للمراجعة.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">1,992 قيمة فريدة. أكثرها شيوعاً (جيد 6%، ممتاز 6%).</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>review</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">النص الكامل لتعليق العميل (عربي/إنجليزي/فرانكو). يُعد المدخل الأساسي لمحرك الـ NLP.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">3,282 قيمة فريدة.</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>rating_customer</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">التقييم الفردي للعميل (1 إلى 5 نجوم).</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">المتوسط: <strong>4.29</strong><br/>الانحراف المعياري: <strong>1.23</strong><br/>التوزيع الأكبر (2,554) للتقييم من 4.6 إلى 5.0.</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>date</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">تاريخ المراجعة (2022 - 2025). مهم جداً لتحليل الاتجاهات (Trend Analysis) ونمو المشاكل عبر الزمن.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed text-[#8C8C8C]">-</td>
                    </tr>
                    <tr className="hover:bg-[#F9F9FB] transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-[#0F62FE] align-top" dir="ltr" style={{textAlign: 'right'}}>author</td>
                      <td className="px-4 sm:px-6 py-4 align-top leading-relaxed text-[#525252]">اسم المراجع. يُستخدم للكشف عن المراجعات المكررة لنفس المستخدم.</td>
                      <td className="px-4 sm:px-6 py-4 text-[#525252] align-top leading-relaxed">1,828 قيمة فريدة.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-6 border-t border-[#E0E0E0]">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#161616] leading-snug">
                  تحليل الفجوات (Analysis Gap): ما الذي تفتقر إليه بيانات الـ Demo؟
                </h2>
                <p className="text-[#525252] mb-6 leading-relaxed text-sm sm:text-base max-w-4xl">
                  مجموعة البيانات الحالية (JERD) ممتازة لعرض قدرات الـ Text Analytics والتصنيف، لكنها تفتقر إلى السياق التشغيلي 
                  (Operational Context) الذي يتوفر في بيانات العميل الحقيقية. أبرز الحقول المفقودة في هذه العينة هي:
                </p>

                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 mb-8">
                  <div className="bg-[#F4F4F4] p-5 rounded-[4px] border border-[#E0E0E0]">
                    <h3 className="font-semibold text-[#161616] mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] flex items-center justify-center text-sm">1</span>
                      قنوات الدعم الفني
                    </h3>
                    <div className="text-sm text-[#0F62FE] font-mono mb-3 bg-white px-2 py-1 rounded inline-block border border-[#E0E0E0]">Support Tickets</div>
                    <p className="text-[#525252] text-sm leading-relaxed">
                      لا توجد تذاكر دعم أو محادثات واتساب توضح تفاعل خدمة العملاء بعد الشراء.
                    </p>
                  </div>
                  
                  <div className="bg-[#F4F4F4] p-5 rounded-[4px] border border-[#E0E0E0]">
                    <h3 className="font-semibold text-[#161616] mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] flex items-center justify-center text-sm">2</span>
                      بيانات الشحن
                    </h3>
                    <div className="text-sm text-[#0F62FE] font-mono mb-3 bg-white px-2 py-1 rounded inline-block border border-[#E0E0E0]">Logistics & Shipping</div>
                    <p className="text-[#525252] text-sm leading-relaxed">
                      غياب حقول <code className="bg-white px-1 py-0.5 rounded border border-[#E0E0E0] text-xs">shipping_provider</code> أو <code className="bg-white px-1 py-0.5 rounded border border-[#E0E0E0] text-xs">city</code> والتي تحدد أين تحدث مشاكل التوصيل الجغرافية.
                    </p>
                  </div>

                  <div className="bg-[#F4F4F4] p-5 rounded-[4px] border border-[#E0E0E0]">
                    <h3 className="font-semibold text-[#161616] mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] flex items-center justify-center text-sm">3</span>
                      البيانات المالية
                    </h3>
                    <div className="text-sm text-[#0F62FE] font-mono mb-3 bg-white px-2 py-1 rounded inline-block border border-[#E0E0E0]">Financial Context</div>
                    <p className="text-[#525252] text-sm leading-relaxed">
                      لا توجد حقول <code className="bg-white px-1 py-0.5 rounded border border-[#E0E0E0] text-xs">order_value</code> أو <code className="bg-white px-1 py-0.5 rounded border border-[#E0E0E0] text-xs">payment_method</code> أو <code className="bg-white px-1 py-0.5 rounded border border-[#E0E0E0] text-xs">refund_status</code> لربط الشكاوى بالخسائر المالية المباشرة.
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#E5F6FF] border border-[#BAE6FF] p-5 rounded-[4px]">
                  <h4 className="font-semibold text-[#00539A] mb-2">في حالة دمج بيانات العميل الحقيقية:</h4>
                  <p className="text-[#00539A] text-sm leading-relaxed">
                    سيتمكن النظام من إيجاد الارتباطات العميقة (Correlations) مثل تأثير شركة شحن معينة على تقييمات منطقة جغرافية محددة، أو حجم الإيرادات المفقودة بسبب شكاوى المقاسات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alerts / Risk Narrative */}
        {activeTab === 1 && (
          <section className="bg-[#FFF1F1] border border-[#FFD7D9] shadow-sm rounded-[4px] p-5 flex items-start gap-4 mb-2">
            <AlertTriangle className="w-5 h-5 text-[#DA1E28] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[13px] font-bold text-[#DA1E28] uppercase tracking-wide">
                Risk Narrative للـ CEO (منطقة الخطر الحقيقي)
              </h4>
              <p className="text-[14px] font-[300] text-[#DA1E28] mt-1.5 leading-relaxed">
                منطقة الخطر الأعلى ليست في التعليقات السلبية فقط، بل في
                التعليقات التي تجمع بين:{" "}
                <strong>شكوى جودة + إحباط أو غضب + مشكلة متكررة</strong>. هذه
                التعليقات هي الأكثر قابلية للتحول إلى تقييمات سلبية، مرتجعات، أو
                فقدان ثقة.
              </p>
            </div>
          </section>
        )}

        {/* Tab 1: Executive Overview */}
        {activeTab === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.overview.map((stat, idx) => (
                <div key={idx} className="flex">
                  <div className="w-full">
                    <MetricCard stat={stat} />
                  </div>
                </div>
              ))}
            </section>

            <section className="bg-white border border-[#E0E0E0] shadow-sm rounded-[6px] p-6">
              <h3 className="text-xl font-light mb-4">
                الخلاصة التنفيذية (Executive Summary)
              </h3>
              <p className="text-[#525252] font-[300] text-[15px] leading-relaxed mb-6">
                العلامة التجارية لديها رصيد ثقة واضح، يظهر في ارتفاع الإشادة
                بأصالة العلامة والمديح المباشر للمنتج. لكن هذا الرصيد معرض
                للتآكل إذا لم تتم معالجة مشكلات الجودة، المقاسات، وتطابق المنتج
                مع الصورة والوصف. <br />
                <br />
                <strong>
                  الأولوية الأولى ليست التسويق، بل تحسين تنفيذ تجربة المنتج بعد
                  قرار الشراء.
                </strong>
              </p>
            </section>
          </div>
        )}

        {/* Tab 2: Sentiment & Emotion */}
        {activeTab === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-1 min-w-0">
                <SentimentChart
                  chartData={data.finalSentiment}
                  title="المشاعر النهائية (Final Sentiment)"
                />
              </div>
              <div className="lg:col-span-1 min-w-0">
                <SentimentChart
                  chartData={data.emotions}
                  title="مؤشر الخطر العاطفي (Emotion Label)"
                />
              </div>
            </div>

            <CardWrapper>
              <CardHeader
                title="تحليل توزيع المشاعر الخام (Raw Sentiment Label)"
                subtitle="Distribution"
              />
              <div className="p-4">
                <HorizontalBarChart
                  chartData={data.sentimentLabel}
                  dataKey="value"
                  fill="#161616"
                  name="النسبة"
                />
              </div>
            </CardWrapper>
          </div>
        )}

        {/* Tab 3: Customer Intent */}
        {activeTab === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <CardWrapper>
              <CardHeader
                title="النوايا الرئيسية (Primary Customer Intent)"
                subtitle="Horizontal Bars"
              />
              <div className="p-4">
                <HorizontalBarChart
                  chartData={data.intentPrimary}
                  dataKey="value"
                  fill="#0F62FE"
                  name="النسبة"
                />
              </div>
            </CardWrapper>

            <CardWrapper>
              <CardHeader
                title="أفعال الكلام (Speech Act)"
                subtitle="Intent Context"
              />
              <div className="p-4">
                <HorizontalBarChart
                  chartData={data.speechAct}
                  dataKey="value"
                  fill="#161616"
                  name="النسبة"
                />
              </div>
            </CardWrapper>
          </div>
        )}

        {/* Tab 4: Issues & Root Cause */}
        {activeTab === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <TopIssues sectionData={data.evidenceBackedIssues} />

            <CardWrapper>
              <CardHeader
                title="إعادة تجميع المشاكل في محاور تنفيذية (CEO Issue Axes)"
                subtitle="Root Cause"
              />
              <div className="p-4 overflow-auto">
                <table className="w-full text-sm text-right">
                  <thead className="bg-[#F4F4F4] text-[#525252] text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-2 px-3 pl-4 border-b border-[#E0E0E0] font-medium text-right">
                        المحور التنفيذي
                      </th>
                      <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-right">
                        التصنيفات المجمعة
                      </th>
                      <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-center">
                        العدد
                      </th>
                      <th className="py-2 px-3 border-b border-[#E0E0E0] font-medium text-center">
                        النسبة
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ceoIssueAxes.map((axis, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-[#F4F4F4] hover:bg-[#F7F9FC] transition-colors"
                      >
                        <td className="py-2.5 px-3 pl-4 text-right text-[#161616] font-semibold">
                          {axis.category}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[#525252] font-mono text-xs max-w-sm whitespace-normal leading-relaxed">
                          {axis.details}
                        </td>
                        <td className="py-2.5 px-3 text-center text-[#525252] font-mono">
                          {axis.count}
                        </td>
                        <td className="py-2.5 px-3 text-center text-[#0F62FE] font-mono font-bold">
                          {axis.value.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardWrapper>
          </div>
        )}

        {/* Tab 5: Actions & Decisions */}
        {activeTab === 5 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <CardWrapper>
              <CardHeader
                title="أولويات القرار التنفيذي بناءً على التكرار والأثر التشغيلي"
                subtitle="Priority Ranking"
              />
              <div className="p-4 overflow-auto">
                <table className="w-full text-[13px] text-right border-collapse">
                  <thead className="bg-[#F8F9FA] text-[#525252] text-[11px] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 border-b border-[#E0E0E0] text-center w-16">
                        الأولوية
                      </th>
                      <th className="py-3 px-4 border-b border-[#E0E0E0] text-right">
                        المحور التشغيلي
                      </th>
                      <th className="py-3 px-4 border-b border-[#E0E0E0] text-right w-1/3">
                        السبب وحجم التأثير
                      </th>
                      <th className="py-3 px-4 border-b border-[#E0E0E0] text-right w-1/3">
                        القرار المقترح
                      </th>
                      <th className="py-3 px-4 border-b border-[#E0E0E0] text-center w-24">
                        الخطورة
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E0E0E0]">
                    {data.executiveDecisions.map((decision, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#F4F4F4]/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-center font-mono text-[#8C8C8C]">
                          {decision.priority}
                        </td>
                        <td className="py-4 px-4 text-right text-[#161616] font-bold text-sm bg-white border-l border-[#F4F4F4]">
                          {decision.axis}
                        </td>
                        <td className="py-4 px-4 text-[#525252] font-light leading-relaxed">
                          {decision.reason}
                        </td>
                        <td
                          className="py-4 px-4 text-[#161616] leading-relaxed 
                              bg-[#F8FAF8] border-l border-[#E0E0E0] font-medium shadow-inner shadow-[0_0_2px_rgba(0,0,0,0.01)]"
                        >
                          {decision.action}
                        </td>
                        <td className="py-4 px-4 text-center align-middle">
                          {decision.urgency.includes("HIGH") || decision.urgency.includes("عالي") ? (
                            <span className="bg-[#FFF1F1] text-[#DA1E28] border border-[#FFD7D9] px-2 py-0.5 rounded-[2px] text-[10px] font-bold font-mono whitespace-nowrap">
                              HIGH
                            </span>
                          ) : decision.urgency.includes("MEDIUM") || decision.urgency.includes("متوسط") ? (
                            <span className="bg-[#FCF8E3] text-[#F1C21B] border border-[#FBEFA1] px-2 py-0.5 rounded-[2px] text-[10px] font-bold font-mono whitespace-nowrap">
                              MEDIUM
                            </span>
                          ) : (
                            <span className="bg-[#F4F4F4] text-[#525252] border border-[#E0E0E0] px-2 py-0.5 rounded-[2px] text-[10px] font-bold font-mono whitespace-nowrap">
                              LOW
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardWrapper>
          </div>
        )}
      </main>
    </div>
  );
}

