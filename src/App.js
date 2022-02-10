import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Formation from "./components/formation/Formation";
import Projet from "./components/projet/Projet";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";

class App extends React.Component {
  state = { activeContainer: "intro" };

  handleCallback = (childData) => {
    this.setState({ activeContainer: childData });
  };

  render() {
    return (
      <div className="app">
        <Topbar />
        <div className="sections">
          <Intro parentCallback={this.handleCallback} />
          <Experience parentCallback={this.handleCallback} />
          <Formation parentCallback={this.handleCallback} />
          <Projet parentCallback={this.handleCallback} />
          <Contact parentCallback={this.handleCallback} />
        </div>
        <Menu liToActive={this.state.activeContainer} />
      </div>
    );
  }
}

export default App;
