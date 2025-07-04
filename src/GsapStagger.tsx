import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      repeat: -1,
      borderRadius: "100%",
      yoyo: true,
      // stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center p-10">
      <h2 className="font-semibold text-xl">GSAP Stagger:</h2>

      <section className="flex gap-4">
        <div className="w-20 h-20 rounded-xl bg-indigo-200 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-300 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-400 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-500 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-600 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-700 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-800 stagger-box" />
        <div className="w-20 h-20 rounded-xl bg-indigo-900 stagger-box" />
      </section>
    </div>
  );
};

export default App;
