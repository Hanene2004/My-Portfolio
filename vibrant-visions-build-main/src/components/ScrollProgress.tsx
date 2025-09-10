import { useEffect, useState } from "react";

const ScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
			setProgress(pct);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
			<div
				className="h-full bg-portfolio-accent transition-[width] duration-200 ease-out"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};

export default ScrollProgress;


