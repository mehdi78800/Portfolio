import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
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
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      <Menu />
    </div>
  );
}

export default App;
