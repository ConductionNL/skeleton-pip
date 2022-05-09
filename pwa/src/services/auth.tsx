import { navigate } from "gatsby-link";
import jwtDecode, { JwtPayload } from "jwt-decode";
import APIService from "../apiService/apiService";

export interface IUnvalidatedUser {
  username: string;
  password: string;
}

export const isBrowser = (): boolean => typeof window !== "undefined";

export const SetsessionStorage = async (username: string, jwt: string) => {
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("JWT", jwt);
  navigate("/");
};

export const handleLogin = async (data: IUnvalidatedUser, API: APIService, username?: string, jwt?: string) => {
  if (!isBrowser()) return;

  return await API.Login.login(data).then((res) => {
    SetsessionStorage((username = res.data.username), (jwt = res.data.jwtToken));
  });
};

export const setJWTIntoSession = (jwt: string) => sessionStorage.setItem("JWT", jwt);

export const redirectToDigiD = () => {
  location.href = `${process.env.GATSBY_BASE_URL}/digid/login?returnUrl=${process.env.GATSBY_FRONTEND_URL}/digidResponse`;
};

export const setDigiDToken = async (username?: string, jwt?: string) => {
  const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop: string) => searchParams.get(prop),
  });
  let token = params.token ?? null;
  token = window.atob(token);

  if (token) {
    SetsessionStorage((username = "Digid"), (jwt = token));
  } else {
    throw new Error("JWT not given in query parameters, could not be set");
  }
};

export const isLoggedIn = (): boolean | void => {
  if (!isBrowser()) return;

  return !!sessionStorage.getItem("username");
};

export const handleLogout = (API: APIService): void => {
  if (!isBrowser()) return;

  sessionStorage.removeItem("username");
  sessionStorage.removeItem("JWT");
  API.removeAuthentication();
  navigate("/");
};

export const validateSession = (): boolean | void => {
  if (!isBrowser()) return;

  const token = sessionStorage.getItem("jwt");

  if (!token) return false;

  const decoded = jwtDecode<JwtPayload>(token);
  const expired = decoded?.exp && Date.now() >= decoded.exp * 1000;

  return !expired;
};

export const getUsername = (): string => {
  return sessionStorage.getItem("username") ?? "";
};
