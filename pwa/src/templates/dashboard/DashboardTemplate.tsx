import * as React from "react";
import * as styles from "./DashboardTemplate.module.css";
import { GridIcon, InboxIcon, ArchiveIcon, UserIcon, ListIcon ,Breadcrumbs } from "@gemeente-denhaag/icons";
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from "@gemeente-denhaag/sidenav";
import { Container } from "../../components/container/Container";
import { PrivateRoute } from "../../components/privateRoute/privateRoute";
import { GatsbyContext } from "../../context/gatsby";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const DashboardTemplate: React.FC = ({ children }) => {
  const gatsbyContext = React.useContext(GatsbyContext);

  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  return (
    <PrivateRoute>
      <Container>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Menu />
          </div>

          <div className={styles.content}>
            <Breadcrumbs {...{ crumbs }} />
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
    { label: t("Self services"), href: "/self-services", current: pathname === "/self-services", icon: <ListIcon /> },
    { label: t("My messages"), href: "/my-messages", current: pathname === "/my-messages", icon: <InboxIcon /> },
    {
      label: t("My cases"),
      href: "/my-cases",
      current: pathname === "/my-cases" || pathname.includes("my-cases"),
      icon: <ArchiveIcon />,
    },
    { label: t("My account"), href: "/my-account", current: pathname === "/my-account", icon: <UserIcon /> },
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
