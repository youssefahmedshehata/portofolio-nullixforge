import { useEffect, useRef } from 'react';

export function TechStackStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    let rafId: number;

    // LERP function
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;
    
    // Math mapping function
    const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
      const clamped = Math.max(inMin, Math.min(value, inMax));
      return ((clamped - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    let scrollY = window.scrollY;
    let targetX = 0;
    let currentX = 0;
    let viewportHeight = window.innerHeight;
    
    const BASE_OFFSET = -800; // Allows shifting right

    let sectionTop = 0;
    let sectionHeight = 0;

    const cacheDimensions = () => {
      viewportHeight = window.innerHeight;
      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      sectionHeight = rect.height;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      const windowBottom = scrollY + viewportHeight;
      const progressStart = sectionTop;
      const progressEnd = sectionTop + sectionHeight + viewportHeight;
      
      let progress = 0;
      if (windowBottom > progressStart && scrollY < progressEnd) {
        progress = mapRange(windowBottom, progressStart, progressEnd, 0, 1);
      }
      
      // Maximum travel range 100px in either direction (total 200) - Reduced to 1/4th
      const travelRange = 100; 
      targetX = BASE_OFFSET + mapRange(progress, 0, 1, travelRange, -travelRange);

      currentX = targetX; // Removed lerp for instant 1:1 scroll tracking
      
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', cacheDimensions, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial calcs
    cacheDimensions();
    currentX = BASE_OFFSET;
    track.style.transform = `translate3d(${BASE_OFFSET}px, 0, 0)`;
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', cacheDimensions);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const icons = [
    "devicon-flutter-plain",
    "devicon-pytorch-original",
    "devicon-tensorflow-original",
    "devicon-react-original",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-laravel-original",
    "devicon-docker-plain",
    "devicon-python-plain",
    "devicon-java-plain"
  ];

  // Repeat 3 times to create long enough stripe
  const repeatedIcons = [...icons, ...icons, ...icons];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <style>{`
        /* premium-tech-strip strictly namespaced CSS */
        .premium-tech-strip {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background-color: #ffffff;
          padding: 6rem 0;
          overflow: hidden;
          box-sizing: border-box;
        }

        .premium-tech-strip * {
          box-sizing: border-box;
        }

        .premium-tech-strip__sticky {
          position: relative;
          width: 100%;
        }

        .premium-tech-strip__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .premium-tech-strip__track {
          display: flex;
          gap: 2rem;
          width: max-content;
          will-change: transform;
          padding: 1rem 8rem;
        }

        .premium-tech-strip__icon-shell {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 
            0px 4px 12px rgba(0, 0, 0, 0.03), 
            0px 1px 2px rgba(0, 0, 0, 0.02),
            inset 0px 2px 4px rgba(255, 255, 255, 1);
          padding: 1.5rem;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
          will-change: transform;
        }

        .premium-tech-strip__icon-shell:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 
            0px 8px 24px rgba(0, 0, 0, 0.05), 
            0px 2px 6px rgba(0, 0, 0, 0.03),
            inset 0px 2px 4px rgba(255, 255, 255, 1);
        }

        /* Grayscale styling for icons */
        .premium-tech-strip i {
          font-size: 2.5rem;
          color: #171717; /* Dark near-black */
          filter: grayscale(100%) opacity(0.85);
          transition: filter 0.4s ease, opacity 0.4s ease;
        }

        .premium-tech-strip__icon-shell:hover i {
          filter: grayscale(100%) opacity(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-tech-strip__track {
            transform: translate3d(0, 0, 0) !important; 
            justify-content: center;
            flex-wrap: wrap; 
          }
        }

        @media (max-width: 768px) {
          .premium-tech-strip__icon-shell {
            width: 80px;
            height: 80px;
          }
          .premium-tech-strip i {
            font-size: 2rem;
          }
          .premium-tech-strip__track {
            gap: 1.5rem;
          }
        }
      `}</style>
      <section ref={sectionRef} className="premium-tech-strip">
        <div className="premium-tech-strip__sticky">
          <div className="premium-tech-strip__inner">
            <div ref={trackRef} className="premium-tech-strip__track">
              {repeatedIcons.map((icon, idx) => (
                <div key={idx} className="premium-tech-strip__item">
                  <div className="premium-tech-strip__icon-shell">
                    <i className={icon}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
