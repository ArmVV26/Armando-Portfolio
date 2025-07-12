import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export const initLenis = () => {
  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
};

export const getLenis = () => lenisInstance;
