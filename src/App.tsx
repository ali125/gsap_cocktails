import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/features/Hero";
import Cocktails from "./components/features/Cocktails";
import About from "./components/features/About";
import Art from "./components/features/Art";
import Menu from "./components/features/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

export default App;
