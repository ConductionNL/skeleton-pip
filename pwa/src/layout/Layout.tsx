import * as React from "react";
import "../styling/index.css";
import "./../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { StylesProvider } from "@gemeente-denhaag/components-react";
import {
  AuthenticatedHeaderTemplate,
  UnauthenticatedHeaderTemplate,
} from "../templates/templateParts/header/HeaderTemplate";
import {
  AuthenticatedFooterTemplate,
  UnauthenticatedFooterTemplate,
} from "../templates/templateParts/footer/FooterTemplate";
import { isLoggedIn } from "../services/auth";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  return (
    <GatsbyProvider value={gatsbyContext}>
      <APIProvider value={API}>
        <StylesProvider>
          {isLoggedIn() ? <AuthenticatedHeaderTemplate /> : <UnauthenticatedHeaderTemplate />}
          <div className="PageContent-wrapper">{children}</div>
          {isLoggedIn() ? <AuthenticatedFooterTemplate /> : <UnauthenticatedFooterTemplate />}
        </StylesProvider>
      </APIProvider>
    </GatsbyProvider>
  );
};

export default Layout;
