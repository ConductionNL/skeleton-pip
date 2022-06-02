import * as React from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useDigiD = () => {
  const API: APIService | null = React.useContext(APIContext);

  if (!API) return;

  const authenticate = () => {
    const params = new URLSearchParams(location.search);
    const undecodedToken: string | null = params.get("token");

    if (!undecodedToken) return false;

    const JWT: string = window.atob(undecodedToken);

    API.setAuthentication(JWT);
    return true;
  };

  const getRedirectURL = (): string => {
    // @ts-ignore
    return `${window.GATSBY_BASE_URL}/digid/login?returnUrl=${window.GATSBY_FRONTEND_URL}/callbacks/digid`;
  };

  return { authenticate, getRedirectURL };
};
