import { useEffect, useRef } from "react";

const Face = ({ className }: { className: string }) => (
  <div className={"absolute inset-0 bg-gradient-accent/20 border border-portfolio-accent/30 rounded-xl " + className} />
);

const Cube3D = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let raf = 0;

    const loop = () => {
      frame += 0.8;
      el.style.transform = `rotateX(${frame}deg) rotateY(${frame * 0.8}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="perspective-[1000px]">
      <div
        ref={ref}
        className="relative m-auto h-16 w-16 [transform-style:preserve-3d]"
      >
        <Face className="translate-z-8" />
        <Face className="-translate-z-8" />
        <Face className="rotate-y-90 translate-z-8" />
        <Face className="-rotate-y-90 translate-z-8" />
        <Face className="rotate-x-90 translate-z-8" />
        <Face className="-rotate-x-90 translate-z-8" />
      </div>
    </div>
  );
};

export default Cube3D;
