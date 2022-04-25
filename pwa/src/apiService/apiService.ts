import axios, { AxiosInstance, AxiosResponse } from "axios";
import Login from "./services/login";
import Notification from "./resources/notification";
import Product from "./resources/product";

export default class APIService {
  public JWT?: string;

  public removeAuthentication(): void {
    this.JWT = undefined;
  }

  public setAuthentication(_JWT: string): void {
    this.JWT = _JWT;
  }

  public get authenticated(): boolean {
    return this.JWT ? true : false;
  }

  public get apiClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers : this.JWT ? {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: this.JWT
    } : {
      Accept: "application/json",
      "Content-Type": "application/json"
    }});
  }

  public get LoginClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });
  }

  // Services
  public get Login(): Login {
    return new Login(this.LoginClient);
  }

  // Resources
  public get Notification(): Notification {
    return new Notification(this.apiClient);
  }

  // Resources
  public get Product(): Product {
    return new Product(this.apiClient);
  }
}

export const Send = (
  instance: AxiosInstance,
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  payload?: JSON,
): Promise<AxiosResponse> => {
  const _payload = JSON.stringify(payload);

  switch (method) {
    case "GET":
      return instance.get(endpoint);
    case "POST":
      return instance.post(endpoint, _payload);
    case "PUT":
      return instance.put(endpoint, _payload);
    case "DELETE":
      return instance.delete(endpoint);
  }
};
