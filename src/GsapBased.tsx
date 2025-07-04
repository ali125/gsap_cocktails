import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapBased = () => {
  useGSAP(() => {
    gsap.to("#to-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });

    gsap.from("#from-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#fromTo-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center p-10">
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl">GSAP To:</h2>
        <div id="to-box" className="w-20 h-20 rounded-xl bg-blue-400" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl">GSAP From:</h2>
        <div id="from-box" className="w-20 h-20 rounded-xl bg-green-400" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl">GSAP FromTo:</h2>
        <div id="fromTo-box" className="w-20 h-20 rounded-xl bg-red-400" />
      </section>
    </div>
  );
};

export default GsapBased;
