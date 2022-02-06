import "./menu.scss";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import ForumIcon from "@mui/icons-material/Forum";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import { useState } from "react";

export default function Menu() {
  const [activeId, setActiveId] = useState(1);
  const components = [
    {
      id: 1,
      titre: "Home",
      text: "intro",
      icon: HomeIcon,
    },
    {
      id: 2,
      titre: "Portfolio",
      text: "portfolio",
      icon: DescriptionIcon,
    },
    {
      id: 3,
      titre: "Works",
      text: "works",
      icon: CodeIcon,
    },
    {
      id: 4,
      titre: "Testimonials",
      text: "testimonials",
      icon: ForumIcon,
    },
    {
      id: 5,
      titre: "Contact",
      text: "contact",
      icon: PermContactCalendarIcon,
    },
  ];

  return (
    <div className="navigation ">
      <ul>
        {components.map((component, index) => (
          <li
            key={index}
            onClick={() => setActiveId(component.id)}
            className={`toggle-container ${
              activeId === component.id ? "active" : ""
            }`}
          >
            <a href={`#${component.text}`}>
              <span className="icon">{<component.icon />}</span>
              <span className="text">{component.titre}</span>
            </a>
          </li>
        ))}

        <div className="indicatorDiv">
          <div className="indicator"></div>
        </div>
      </ul>
    </div>
  );
}
