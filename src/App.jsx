import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Work from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu"



function App() {

  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
