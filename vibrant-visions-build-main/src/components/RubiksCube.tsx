import { useEffect, useMemo, useRef, useState } from "react";

type Vec2 = { x: number; y: number };

const FACE_COLORS: Record<string, string> = {
  front: "#ff3b30", // red
  back: "#34c759", // green
  left: "#0a84ff", // blue
  right: "#ff9f0a", // orange
  top: "#ffffff", // white
  bottom: "#ffd60a", // yellow
};

const Square = ({ color }: { color: string }) => (
  <div
    style={{ background: color }}
    className="h-full w-full rounded-[2px] shadow-[inset_0_0_2px_rgba(0,0,0,.4)]"
  />
);

const Face = ({ color, style }: { color: string; style: React.CSSProperties }) => (
  <div
    style={style}
    className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px] rounded-lg bg-neutral-800/20"
  >
    {Array.from({ length: 9 }).map((_, i) => (
      <Square key={i} color={color} />
    ))}
  </div>
);

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const RubiksCube = ({ size = 84 }: { size?: number }) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<Vec2>({ x: 0, y: 0 });

  const half = size / 2;

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // gentle rotation based on cursor position relative to viewport center
  const transform = useMemo(() => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = clamp((mouse.x - cx) / cx, -1, 1);
    const dy = clamp((mouse.y - cy) / cy, -1, 1);
    const rx = (-dy * 18).toFixed(2);
    const ry = (dx * 18).toFixed(2);
    return `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }, [mouse.x, mouse.y]);

  const faceStyle = (t: string): React.CSSProperties => ({
    transform: `${t} translateZ(${half}px)`,
  });

  return (
    <div className="pointer-events-none select-none" style={{ perspective: 900 }}>
      <div
        ref={cubeRef}
        className="relative [transform-style:preserve-3d] drop-shadow-lg"
        style={{ width: size, height: size, transform }}
      >
        <Face color={FACE_COLORS.front} style={faceStyle("rotateY(0deg)")} />
        <Face color={FACE_COLORS.back} style={faceStyle("rotateY(180deg)")} />
        <Face color={FACE_COLORS.left} style={faceStyle("rotateY(-90deg)")} />
        <Face color={FACE_COLORS.right} style={faceStyle("rotateY(90deg)")} />
        <Face color={FACE_COLORS.top} style={faceStyle("rotateX(90deg)")} />
        <Face color={FACE_COLORS.bottom} style={faceStyle("rotateX(-90deg)")} />
      </div>
    </div>
  );
};

export default RubiksCube;


