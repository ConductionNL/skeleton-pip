import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class News {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const {
      data: { _embedded },
    } = await Send(this._instance, "GET", "/nieuws");

    return _embedded.nieuws;
  };
}
