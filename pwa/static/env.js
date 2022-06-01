export const setEnv = () => {
  if (process.env.NODE_ENV === "development") {
    window.GATSBY_ME_URL = "http://localhost/me";
    window.GATSBY_API_URL = "http://localhost/api";
    window.GATSBY_ADMIN_URL = "http://localhost/admin";
    window.GATSBY_BASE_URL = "http://localhost";
    window.GATSBY_FRONTEND_URL = "http://localhost:8000";
    window.GATSBY_ORGANIZATION =
      "http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43";
    window.GATSBY_LOGIN_REDIRECT = "vault";
  }

  if (process.env.NODE_ENV === "production") {
    window.GATSBY_ME_URL = "https://gateway.commonground.nu/me";
    window.GATSBY_API_URL = "https://gateway.commonground.nu/api";
    window.GATSBY_ADMIN_URL = "https://gateway.commonground.nu/admin";
    window.GATSBY_BASE_URL = "https://gateway.commonground.nu";
    window.GATSBY_FRONTEND_URL = "https://mijn.commonground.nu";
    window.GATSBY_ORGANIZATION = "";
    window.GATSBY_LOGIN_REDIRECT = "vault";
  }
};
