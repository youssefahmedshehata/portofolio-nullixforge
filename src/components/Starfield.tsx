import { CanvasStarfield } from '../rendering/canvas/CanvasStarfield';

export function Starfield() {
  return (
    <>
      <div
        className="fixed inset-0 z-[-3] pointer-events-none bg-[#030304]"
        aria-hidden="true"
      />

      <CanvasStarfield
        className="sa-canvas-layer fixed inset-0 z-[-2] pointer-events-none opacity-60"
      />

      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,3,4,0.88) 0%, rgba(6,7,8,0.94) 42%, rgba(8,9,11,0.98) 100%)',
        }}
      />

      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="fixed bottom-0 inset-x-0 h-[40vh] z-[-1] pointer-events-none bg-gradient-to-t from-molten-gold/[0.03] to-transparent" />
    </>
  );
}