import { useEffect, useRef } from 'react';

export function CliSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (sectionRef.current) {
        const els = sectionRef.current.querySelectorAll('.ag-cli-section__animate');
        els.forEach(el => el.classList.add('ag-cli-section--visible'));
      }
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ag-cli-section--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll('.ag-cli-section__animate');
      els.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ag-cli-section {
          background-color: #ffffff;
          width: 100%;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding: 6vw 8vw;
          box-sizing: border-box;
          /* Keep clean design without unnecessary borders if it looks good, but let's match the spacing */
        }
        .ag-cli-section * {
          box-sizing: border-box;
        }

        .ag-cli-section__inner {
          display: grid;
          grid-template-columns: 42% 58%;
          max-width: 1500px;
          width: 100%;
          align-items: center;
          gap: 4vw;
        }

        .ag-cli-section__left {
          padding-right: 2vw;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ag-cli-section--visible.ag-cli-section__left {
          opacity: 1;
          transform: translateY(0);
        }

        .ag-cli-section__heading {
          font-size: 48px;
          font-weight: 600;
          color: #111111;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .ag-cli-section__paragraph {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(17, 17, 17, 0.68);
          margin: 0;
        }

        .ag-cli-section__right {
          display: flex;
          justify-content: flex-end;
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.15s;
        }

        .ag-cli-section--visible.ag-cli-section__right {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .ag-cli-section__device {
          width: 100%;
          max-width: 900px;
          height: 70vh;
          background-color: #080808;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 24px 48px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          position: relative;
        }

        .ag-cli-section__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px; /* Match the device border radius */
        }

        @media (max-width: 1024px) {
          .ag-cli-section__inner {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .ag-cli-section__left {
            padding-right: 0;
            text-align: center;
          }
          .ag-cli-section__heading {
            font-size: 40px;
          }
          .ag-cli-section__device {
            height: 70vh;
          }
        }

        @media (max-width: 768px) {
          .ag-cli-section {
            padding: 12vw 6vw;
            min-height: auto;
          }
          .ag-cli-section__heading {
            font-size: 34px;
          }
          .ag-cli-section__paragraph {
            font-size: 16px;
          }
          .ag-cli-section__device {
            height: 70vh;
            border-radius: 24px;
          }
          .ag-cli-section__image {
            border-radius: 24px;
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="ag-cli-section">
        <div className="ag-cli-section__inner">
          
          <div className="ag-cli-section__left ag-cli-section__animate">
            <h2 className="ag-cli-section__heading">Antigravity CLI</h2>
            <p className="ag-cli-section__paragraph">
              The lightweight, fast, terminal-first surface to work with autonomous coding agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.
            </p>
          </div>
          
          <div className="ag-cli-section__right ag-cli-section__animate">
            <div className="ag-cli-section__device" aria-label="Mockup of the Antigravity CLI interface">
              <img 
                src="/workflow-imag.png" 
                alt="Web & App Development Inside our workflow" 
                className="ag-cli-section__image" 
                id="uploaded-workflow-image"
              />
              {/* Note: Please drag and drop your image to the file explorer on the left, name it 'workflow-image.png', and it will appear here. */}
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
