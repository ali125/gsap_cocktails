import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#blue-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#blue-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  const handlePlayPause = () => {
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };

  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center p-10">
      <h2 className="font-semibold text-xl">GSAP Timeline:</h2>
      <section>
        <button
          className="px-4 py-2 hover:bg-emerald-600 rounded-xl cursor-pointer bg-emerald-400 transition-all text-white"
          onClick={handlePlayPause}
        >
          Play/Pause
        </button>
      </section>

      <section className="flex flex-col gap-4">
        <div id="blue-box" className="w-20 h-20 rounded-xl bg-blue-400" />
      </section>
    </div>
  );
};

export default App;
