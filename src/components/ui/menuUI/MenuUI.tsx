import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import styles from "./MenuUI.module.css";
import clsx from "clsx";
import { TMenuLink } from "../../../utils/types";

export const MenuUI = (links: TMenuLink[]) => {
  return (
    <nav className={styles.nav_bar}>
      <ul className={styles.link_list}>
        {links.map((link) => (
          <li key={nanoid()}>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.link_active)
              }
              to={link.path}
              key={nanoid()}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
