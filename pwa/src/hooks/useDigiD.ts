import * as React from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import { navigate } from "gatsby";

export const useDigiD = () => {
  const API: APIService = React.useContext(APIContext);

  const authenticate = () => {
    const params = new URLSearchParams(location.search);
    const undecodedToken: string | null = params.get("token");

    if (!undecodedToken) return;

    const JWT: string = window.atob(undecodedToken);
  
    API.setAuthentication(JWT);
    navigate('/');
  };

  return { authenticate };
};
