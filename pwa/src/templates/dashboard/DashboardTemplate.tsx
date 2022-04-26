import * as React from "react";
import "./DashboardTemplate.css";
import { GridIcon, InboxIcon, ArchiveIcon, DocumentIcon, UserIcon } from "@gemeente-denhaag/icons";
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from "@gemeente-denhaag/sidenav";
import { Container } from "../../components/container/Container";
import { PrivateRoute } from "../../components/privateRoute/privateRoute";
import { GatsbyContext } from "../../context/gatsby";

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
  const {
    location: { pathname },
  } = React.useContext(GatsbyContext);

  const menuItems: MenuItem[] = [
    { label: "Overview", href: "/", current: pathname === "/", icon: <GridIcon /> },
    { label: "My messages", href: "/my-messages", current: pathname === "/my-messages", icon: <InboxIcon /> },
    { label: "Current cases", href: "/current-cases", current: pathname === "/current-cases", icon: <ArchiveIcon /> },
    { label: "Themes", href: "/themes", current: pathname === "/themes", icon: <DocumentIcon /> },
    { label: "Forms", href: "/forms", current: pathname === "/forms", icon: <DocumentIcon /> },
    { label: "My account", href: "/my-account", current: pathname === "/my-account", icon: <UserIcon /> },
  ];

  return (
    <Sidenav>
      <SidenavList>
        {menuItems.map(({ href, label, icon, current }) => (
          <SidenavItem key={href}>
            <SidenavLink href={href} current={current}>
              {icon}
              {label}
            </SidenavLink>
          </SidenavItem>
        ))}
      </SidenavList>
    </Sidenav>
  );
};
