import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import styles from "./MenuUI.module.css";
import clsx from "clsx";

export type TMenuLink = {
  name: string;
  url: string;
};

export const MenuUI = (links: TMenuLink[]) => {
  return (
    <nav className={styles.nav_bar}>
      <ul className={styles.link_list}>
        {links.map((link) => (
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.link_active)
              }
              to={link.url}
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
