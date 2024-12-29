import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideInWithScroll = (
  ref: React.RefObject<HTMLDivElement>,
  direction: "left" | "right"
) => {
  const xValue = direction === "left" ? -300 : 300;

  gsap.fromTo(
    ref.current,
    { x: xValue, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
        end: "bottom 40%",
        scrub: true,
      },
    }
  );
};

export const LoadingCount = (setCount: (value: number) => void) => {
  const ctx = gsap.context(() => {
    gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 1.8,
        ease: "power1.out",
        onUpdate: function () {
          setCount(Math.round(this.targets()[0].value));
        },
      }
    );
  });

  return () => ctx.revert();
};
