import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className={`fixed z-50 right-4 bottom-4 rounded-full px-3 py-3 shadow-lg transition-all duration-300 bg-portfolio-accent text-foreground hover:opacity-90 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollTopButton;
