import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="text">
        <h2>Bonjour, je suis</h2>
        <h1>Mehdi Regragui</h1>
        <h3>Développeur Web</h3>
      </div>
      <div className="link">
        <a href="#formation">
          <KeyboardArrowDownIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}
