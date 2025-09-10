import { useEffect } from "react";

/** Adds fade-up reveal to all elements with `data-reveal` attribute. */
export const useReveal = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    });

    elements.forEach((el) => {
      el.classList.add("reveal-init");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
