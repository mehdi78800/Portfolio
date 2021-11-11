import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MR
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>06 01 01 01 01</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>mehdi.regragui@live.fr</span>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
