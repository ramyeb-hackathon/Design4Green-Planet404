import { h } from "preact";

import style from "./navFilter.css";

export const NavFilter = ({ onClick, activeCategories }) => {
  return (
    <div className={`${style.container}`} role="menu">
      <div
        className={[
          style.navItem,
          activeCategories.includes("strategie") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("strategie")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Stratégie
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("specifications") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("specifications")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Specifications
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("ux/ui") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("ux/ui")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        UX/UI
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("contenus") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("contenus")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Contenus
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("architecture") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("architecture")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Architecture
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("frontend") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("frontend")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Frontend
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("backend") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("backend")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Backend
      </div>
      <div
        className={[
          style.navItem,
          activeCategories.includes("hebergement") ? style.active : "",
        ].join(" ")}
        onClick={() => onClick("hebergement")}
        role="menuitem"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        Hébergement
      </div>
    </div>
  );
};
