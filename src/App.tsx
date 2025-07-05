import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/features/Hero";
import Cocktails from "./components/features/Cocktails";
import About from "./components/features/About";
import Art from "./components/features/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
