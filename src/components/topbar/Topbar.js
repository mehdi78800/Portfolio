import "./topbar.scss";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="left">
      <a href="#intro" className="logo">
        <img src="/assets/img/mr_dev_logo.png" alt="logo" />
      </a>
    </div>
  );
}
