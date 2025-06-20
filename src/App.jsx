import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Toaster position="top-center" reverseOrder={false} />
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
