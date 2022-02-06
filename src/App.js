import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Formation from "./components/formation/Formation";
import Projet from "./components/projet/Projet";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
function App() {
  return (
    <div className="app">
      <Topbar />
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div className="sections">
        <Intro />
        <Formation />
        <Experience />
        <Projet />
        <Contact />
      </div>
      <Menu />
    </div>
  );
}

export default App;
