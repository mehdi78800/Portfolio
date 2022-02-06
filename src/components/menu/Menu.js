import "./menu.scss";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import { useState } from "react";

export default function Menu() {
  const [activeId, setActiveId] = useState(3);
  const components = [
    {
      id: 1,
      titre: "Experiences",
      text: "experience",
      icon: WorkIcon,
    },
    {
      id: 2,
      titre: "Formations",
      text: "formation",
      icon: SchoolIcon,
    },
    {
      id: 3,
      titre: "Home",
      text: "intro",
      icon: HomeIcon,
    },
    {
      id: 4,
      titre: "Projets",
      text: "projet",
      icon: CodeIcon,
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
