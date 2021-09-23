import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Work from "./components/works/Works";
import Contact from "./components/contact/Contact";

//import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Skills />
        <Work />
        <Contact />

      </div>
    </div>

  );
}

export default App;
