import { useEffect } from "react";

export const useTilt = (selector = "[data-tilt]") => {
	useEffect(() => {
		const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));
		const onMove = (e: MouseEvent) => {
			cards.forEach((card) => {
				const rect = card.getBoundingClientRect();
				const cx = rect.left + rect.width / 2;
				const cy = rect.top + rect.height / 2;
				const dx = (e.clientX - cx) / rect.width;
				const dy = (e.clientY - cy) / rect.height;
				card.style.transform = `perspective(900px) rotateX(${(-dy * 6).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg)`;
			});
		};
		const onLeave = () => {
			cards.forEach((card) => (card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)"));
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		window.addEventListener("mouseleave", onLeave);
		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseleave", onLeave);
		};
	}, [selector]);
};


