import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (scrollRef.current) {
        const boxes = gsap.utils.toArray(scrollRef.current?.children);

        boxes.forEach((box: any) => {
          gsap.to(box, {
            x: 150 * (boxes.indexOf(box) + 5),
            rotation: 360,
            scale: 1.5,
            borderRadius: "100%",
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 10%",
              scrub: true,
            },
            ease: "power1.inOut",
          });
        });
      }
    },
    { scope: scrollRef }
  );

  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center p-10">
      <section className="h-[70vh]">
        <h2 className="font-semibold text-xl">GSAP ScrollTrigger:</h2>
      </section>
      <section className="h-screen">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at
          dignissimos voluptatibus praesentium cumque sunt, culpa numquam
          reiciendis enim! Ad quisquam adipisci obcaecati laboriosam, itaque
          nobis reiciendis eaque laudantium aut.
        </p>
      </section>

      <section className="h-screen flex flex-col gap-10" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="w-20 h-20 scroll-box rounded-xl bg-pink-500"
        />

        <div
          id="scroll-orange"
          className="w-20 h-20 scroll-box rounded-xl bg-orange-500"
        />
      </section>
      <section className="h-screen flex flex-col gap-10"></section>
    </div>
  );
};

export default App;
