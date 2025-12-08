import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works } from "./components";
import Education from "./components/education";
import Skills from "./components/Skill";
import Chat from "./components/chat";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Works />
        <Experience />
        <Feedbacks />
        <Contact />
     <Chat/>


      </div>
    </BrowserRouter>
  );
}

export default App;
