import * as React from "react";
import * as styles from "./DashboardTemplate.module.css";
import { GridIcon, InboxIcon, ArchiveIcon, UserIcon, ListIcon } from "@gemeente-denhaag/icons";
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from "@gemeente-denhaag/sidenav";
import { GatsbyContext } from "../../context/gatsby";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import { Breadcrumbs, Container, PrivateRoute } from "@conduction/components";
import { isLoggedIn } from "../../services/auth";
import { OpengemeentenIconGezicht, OpengemeentenIconNieuwsbrief } from "@opengemeenten/iconset-react";

export const DashboardTemplate: React.FC = ({ children }) => {
  const { t } = useTranslation();

  const {
    pageContext: {
      breadcrumb: { crumbs },
    },
  } = React.useContext(GatsbyContext);

  const translatedCrumbs = crumbs.map((crumb: any) => ({ ...crumb, crumbLabel: t(crumb.crumbLabel) }));

  return (
    <PrivateRoute authenticated={isLoggedIn()}>
      <Container>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Menu />
          </div>

          <div className={styles.content}>
            <Breadcrumbs crumbs={translatedCrumbs} />
            {children}
          </div>
        </div>
      </Container>
    </PrivateRoute>
  );
};

/**
 * Local side navigation menu component
 */

interface MenuItem {
  label: string;
  href: string;
  icon: JSX.Element;
  current?: boolean;
}

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const {
    location: { pathname },
  } = React.useContext(GatsbyContext);

  const menuItems: MenuItem[] = [
    { label: t("Overview"), href: "/", current: pathname === "/", icon: <GridIcon /> },
    {
      label: t("Self services"),
      href: "/self-services",
      current: pathname.includes("self-services"),
      icon: <ListIcon />,
    },
    {
      label: t("My messages"),
      href: "/my-messages",
      current: pathname.includes("my-messages"),
      icon: <OpengemeentenIconNieuwsbrief className={styles.iconsSidenav} />,
    },
    { label: t("My cases"), href: "/my-cases", current: pathname.includes("my-cases"), icon: <ArchiveIcon /> },
    {
      label: t("My account"),
      href: "/my-account",
      current: pathname.includes("my-account"),
      icon: <OpengemeentenIconGezicht className={styles.iconsSidenav} />,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string): void => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <Sidenav>
      <SidenavList>
        {menuItems.map(({ href, label, icon, current }) => (
          <SidenavItem key={href}>
            <SidenavLink href="" onClick={(e) => handleClick(e, href)} current={current}>
              {icon}
              {label}
            </SidenavLink>
          </SidenavItem>
        ))}
      </SidenavList>
    </Sidenav>
  );
};
