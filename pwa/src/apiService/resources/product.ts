import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Product {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getOne = async (id: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/products/${id}`);

    return data;
  };

  public getAll = async (): Promise<any> => {
    const {
      data: { results },
    } = await Send(this._instance, "GET", "/products");

    return results;
  };
}
