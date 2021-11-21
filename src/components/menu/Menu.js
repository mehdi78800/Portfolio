import "./menu.scss";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import ForumIcon from "@mui/icons-material/Forum";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">
            <HomeIcon className="iconNav" /> Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">
            <DescriptionIcon className="iconNav" /> Portfolio
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">
            <CodeIcon className="iconNav" /> Works
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">
            <ForumIcon className="iconNav" /> Testimonials
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">
            <PermContactCalendarIcon className="iconNav" /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
