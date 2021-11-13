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
          <HomeIcon className="iconNav" />
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <DescriptionIcon className="iconNav" />
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <CodeIcon className="iconNav" />
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <ForumIcon className="iconNav" />
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <PermContactCalendarIcon className="iconNav" />
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
