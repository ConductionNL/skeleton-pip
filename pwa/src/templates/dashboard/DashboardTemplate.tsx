import * as React from "react";
import "./DashboardTemplate.css";
import { GridIcon, InboxIcon, ArchiveIcon, DocumentIcon, UserIcon } from "@gemeente-denhaag/icons";
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from "@gemeente-denhaag/sidenav";
import { Container } from "../../components/container/Container";
import { PrivateRoute } from "../../components/privateRoute/privateRoute";
import { GatsbyContext } from "../../context/gatsby";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const DashboardTemplate: React.FC = ({ children }) => {
  return (
    <PrivateRoute>
      <Container>
        <div className="DashboardTemplate">
          <div className="DashboardTemplate-menu">
            <Menu />
          </div>

          <div className="DashboardTemplate-content">{children}</div>
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
    { label: t("My messages"), href: "/my-messages", current: pathname === "/my-messages", icon: <InboxIcon /> },
    {
      label: t("My cases"),
      href: "/my-cases",
      current: pathname === "/my-cases",
      icon: <ArchiveIcon />,
    },
    { label: t("Themes"), href: "/themes", current: pathname === "/themes", icon: <DocumentIcon /> },
    { label: t("Forms"), href: "/forms", current: pathname === "/forms", icon: <DocumentIcon /> },
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
