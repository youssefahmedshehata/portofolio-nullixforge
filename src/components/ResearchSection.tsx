import { useEffect, useRef, useState } from 'react';

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stats, setStats] = useState({ ep: 184, reward: 192.41, statusIdx: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const nextEp = prev.ep + 1;
        const nextReward = prev.reward + (Math.random() * 2.5);
        const nextStatusIdx = (prev.statusIdx + 1) % 4;
        return { ep: nextEp, reward: nextReward, statusIdx: nextStatusIdx };
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const statuses = ["update PPO step", "episode {ep}", "reward improved", "checkpoint saved"];
  const currentStatus = statuses[stats.statusIdx].replace("{ep}", stats.ep.toString());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const els = document.querySelectorAll('.ag-research-section__animate');
      els.forEach(el => el.classList.add('ag-research-section--visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ag-research-section--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const els = document.querySelectorAll('.ag-research-section__animate');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ag-research-section {
          background-color: #ffffff;
          width: 100%;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding: 6vw 8vw;
          box-sizing: border-box;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .ag-research-section * {
          box-sizing: border-box;
        }

        .ag-research-section__inner {
          display: grid;
          grid-template-columns: 42% 58%;
          max-width: 1500px;
          width: 100%;
          align-items: center;
          gap: 4vw;
        }

        .ag-research-section__left {
          padding-right: 2vw;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ag-research-section--visible.ag-research-section__left {
          opacity: 1;
          transform: translateY(0);
        }

        .ag-research-section__heading {
          font-size: 48px;
          font-weight: 600;
          color: #111111;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .ag-research-section__paragraph {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(17, 17, 17, 0.68);
          margin: 0;
        }

        .ag-research-section__right {
          display: flex;
          justify-content: flex-end;
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.15s;
        }

        .ag-research-section--visible.ag-research-section__right {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .ag-research-section__device {
          width: 100%;
          max-width: 900px;
          height: 70vh;
          border-radius: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 24px 48px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at 50% 50%,
              #000000 0%,
              #000000 30%,
              rgba(3, 8, 18, 0.98) 42%,
              rgba(24, 55, 118, 0.92) 54%,
              rgba(95, 143, 232, 0.70) 63%,
              rgba(37, 77, 155, 0.62) 70%,
              rgba(6, 16, 36, 0.96) 84%,
              #06101f 100%
            ),
            radial-gradient(
              circle at 0% 50%,
              rgba(22, 60, 140, 0.22) 0%,
              transparent 42%
            ),
            radial-gradient(
              circle at 100% 50%,
              rgba(22, 60, 140, 0.22) 0%,
              transparent 42%
            ),
            linear-gradient(
              135deg,
              #0b1f4a 0%,
              #02040a 45%,
              #06101f 100%
            );
        }

        .ag-research-section__device::before {
          content: "";
          position: absolute;
          inset: -12%;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 50% 50%,
              transparent 0%,
              transparent 38%,
              rgba(95, 143, 232, 0.45) 54%,
              rgba(40, 85, 180, 0.28) 66%,
              transparent 78%
            );
          filter: blur(28px);
          opacity: 0.95;
          z-index: 0;
        }

        .ag-research-section__terminal {
          width: 82%;
          height: 70%;
          background-color: #16181D; 
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .ag-research-section__terminal-header {
          height: 36px;
          background-color: #1A1D24;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          padding: 0 16px;
        }

        .ag-research-section__terminal-dots {
          display: flex;
          gap: 8px;
        }

        .ag-research-section__terminal-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .ag-research-section__terminal-dots span:nth-child(1) { background-color: #FF5F56; }
        .ag-research-section__terminal-dots span:nth-child(2) { background-color: #FFBD2E; }
        .ag-research-section__terminal-dots span:nth-child(3) { background-color: #27C93F; }

        .ag-research-section__terminal-body {
          flex: 1;
          display: flex;
          padding: 24px;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 13px;
          color: #A0A5B5;
          gap: 32px;
          overflow: hidden;
        }

        .ag-research-section__terminal-left {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .ag-research-section__terminal-right {
          flex: 1.5;
          border-left: 1px solid rgba(255,255,255,0.05);
          padding-left: 32px;
          display: flex;
          flex-direction: column;
        }

        .ag-research-section__terminal-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #fff, #bbb);
          color: #000;
          font-weight: 800;
          border-radius: 4px;
          font-family: system-ui, sans-serif;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .ag-research-section__terminal-welcome {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .ag-research-section__terminal-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ag-research-section__terminal-menu li {
          display: flex;
          align-items: center;
          color: rgba(160, 165, 181, 0.6);
        }

        .ag-research-section__terminal-menu-active {
          color: #58A6FF !important;
        }

        .ag-research-section__terminal-menu-active span {
          margin-right: 8px;
        }

        .ag-research-line {
          line-height: 1.6;
          white-space: pre;
        }

        .ag-research-line--added {
          color: #7EE787;
          background-color: rgba(46, 160, 67, 0.15);
          margin-left: -8px;
          padding-left: 8px;
          margin-right: -8px;
          padding-right: 8px;
        }

        .ag-research-line--removed {
          color: #FFA198;
          background-color: rgba(248, 81, 73, 0.15);
          margin-left: -8px;
          padding-left: 8px;
          margin-right: -8px;
          padding-right: 8px;
        }

        .ag-research-section__terminal-footer {
          height: 32px;
          background-color: #1A1D24;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          padding: 0 16px;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 11px;
          color: #6E7687;
        }

        @media (max-width: 1024px) {
          .ag-research-section__inner {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .ag-research-section__left {
            padding-right: 0;
            text-align: center;
          }
          .ag-research-section__heading {
            font-size: 40px;
          }
          .ag-research-section__device {
            height: 70vh;
          }
          .ag-research-section__terminal {
            width: 90%;
          }
        }

        @media (max-width: 768px) {
          .ag-research-section {
            padding: 12vw 6vw;
            min-height: auto;
          }
          .ag-research-section__heading {
            font-size: 34px;
          }
          .ag-research-section__paragraph {
            font-size: 16px;
          }
          .ag-research-section__device {
            height: 70vh;
            border-radius: 24px;
          }
          .ag-research-section__terminal {
            width: 90%;
            height: 85%;
          }
          .ag-research-section__terminal-body {
            flex-direction: column;
            padding: 16px;
            gap: 16px;
            overflow-y: auto;
          }
          .ag-research-section__terminal-right {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-left: 0;
            padding-top: 16px;
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="ag-research-section">
        <div className="ag-research-section__inner">
          
          <div className="ag-research-section__left ag-research-section__animate">
            <h2 className="ag-research-section__heading">Antigravity CLI</h2>
            <p className="ag-research-section__paragraph">
              The lightweight, fast, terminal-first surface to work with autonomous coding agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.
            </p>
          </div>
          
          <div className="ag-research-section__right ag-research-section__animate">
            <div className="ag-research-section__device" aria-label="Mockup of the Antigravity CLI interface">
              <div className="ag-research-section__terminal">
                
                <div className="ag-research-section__terminal-header">
                  <div className="ag-research-section__terminal-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                
                <div className="ag-research-section__terminal-body">
                  <div className="ag-research-section__terminal-left">
                    <div className="ag-research-section__terminal-logo">A</div>
                    <div className="ag-research-section__terminal-welcome">RL Project</div>
                    <ul className="ag-research-section__terminal-menu">
                      <li>configs/</li>
                      <li>agents/</li>
                      <li>training/</li>
                      <li className="ag-research-section__terminal-menu-active"><span>&gt;</span> train_ppo.py</li>
                      <li>models/</li>
                      <li>logs/</li>
                    </ul>
                  </div>
                  
                  <div className="ag-research-section__terminal-right">
                    <div className="ag-research-line"><span style={{ color: '#A0A5B5' }}>&gt; training:</span> {currentStatus}</div>
                    <div className="ag-research-line"><span style={{ color: '#A0A5B5' }}>AGY:</span> Live training patch</div>
                    <div className="ag-research-line"><br /></div>
                    <div className="ag-research-line">import torch</div>
                    <div className="ag-research-line ag-research-line--removed">- reward = env.step(action)</div>
                    <div className="ag-research-line ag-research-line--added">+ reward, done = env.step(action)</div>
                    <div className="ag-research-line ag-research-line--added">+ agent.update_policy(log_probs, rewards)</div>
                    <div className="ag-research-line ag-research-line--added">+ print(`episode=${stats.ep} reward=${stats.reward.toFixed(2)}`)</div>
                  </div>
                </div>
                
                <div className="ag-research-section__terminal-footer">
                  &uarr;/&darr; Navigate &middot; enter Confirm
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
