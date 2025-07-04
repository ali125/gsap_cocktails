import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center p-10">
      <h1 id="text" className="font-semibold text-2xl opacity-0 translate-y-10">
        GSAP Text:
      </h1>
      <p className="para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at
        dignissimos voluptatibus praesentium cumque sunt, culpa numquam
        reiciendis enim! Ad quisquam adipisci obcaecati laboriosam, itaque nobis
        reiciendis eaque laudantium aut.
      </p>
      <p className="para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at
        dignissimos voluptatibus praesentium cumque sunt, culpa numquam
        reiciendis enim! Ad quisquam adipisci obcaecati laboriosam, itaque nobis
        reiciendis eaque laudantium aut.
      </p>
      <p className="para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at
        dignissimos voluptatibus praesentium cumque sunt, culpa numquam
        reiciendis enim! Ad quisquam adipisci obcaecati laboriosam, itaque nobis
        reiciendis eaque laudantium aut.
      </p>
    </div>
  );
};

export default App;
