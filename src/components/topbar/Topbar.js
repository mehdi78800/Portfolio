import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="/assets/img/mr_dev_logo.png" alt="logo" />
          </a>
          {/* <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>06 01 01 01 01</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>mehdi.regragui@live.fr</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
