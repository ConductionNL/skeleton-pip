import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Case {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    _instance.interceptors.request.use(function (config) {
      return { ...config, params: { extend: "status&extend[]=zaakType" } };
    });

    this._instance = _instance;
  }

  public getOne = async (id: string): Promise<any> => {
    const {
      data: { _embedded },
    } = await Send(this._instance, "GET", `/zaken/${id}`);
    return _embedded.zaken;
  };

  public getAll = async (): Promise<any> => {
    const {
      data: { _embedded },
    } = await Send(this._instance, "GET", "/zaken");

    return _embedded.zaken;
  };
}
