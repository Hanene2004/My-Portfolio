import { useEffect, useState } from "react";

const CursorGlow = () => {
	const [pos, setPos] = useState({ x: -1000, y: -1000 });

	useEffect(() => {
		const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
			style={{
				background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(138,63,252,0.08), transparent 40%)`,
			}}
		/>
	);
};

export default CursorGlow;


