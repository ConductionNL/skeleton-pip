import * as React from "react";
import * as styles from "./TopNav.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";

export interface ITopNavItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

interface TopNavItemsProps {
  items: ITopNavItem[];
}

export const PrimaryTopNav: React.FC<TopNavItemsProps> = ({ items }) => {
  return (
    <nav className={styles.primary}>
      <ul className={styles.ul}>
        {items.map(({ label, href, icon }, idx) => (
          <li className={styles.li} key={idx} onClick={() => navigate(href)}>
            <Link icon={icon} iconAlign="start">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const SecondaryTopNav: React.FC<TopNavItemsProps> = ({ items }) => {
  return (
    <nav className={styles.secondary}>
      <ul className={styles.ul}>
        {items.map(({ label, href, icon }, idx) => (
          <li className={styles.li} key={idx} onClick={() => navigate(href)}>
            <Link icon={icon} iconAlign="start">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
