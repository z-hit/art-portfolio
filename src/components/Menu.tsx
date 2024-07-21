import { nanoid } from "nanoid";
import { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";

export type TMenuLink = {
  name: string;
  url: string;
};

export const Menu = (links: TMenuLink[]) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <NavLink to={link.url} key={nanoid()}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
