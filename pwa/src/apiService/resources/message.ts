import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Message {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getOne = async (messageId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/contactmomenten/${messageId}`);

    return data;
  };

  public getAll = async (): Promise<any> => {
    const {
      data: { results },
    } = await Send(this._instance, "GET", "/contactmomenten");

    return results;
  };
}
