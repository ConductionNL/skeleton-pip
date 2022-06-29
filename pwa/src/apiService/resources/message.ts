import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Message {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    _instance.interceptors.request.use((config) => ({ ...config, params: { extend: ["medewerkerIdentificatie"] } }));

    this._instance = _instance;
  }

  public getOne = async (messageId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/contactmomenten/${messageId}`);

    const mappedData = {
      medewerkerNaam: {
        voorletters: data?._embedded?.medewerkerIdentificatie.voorletters,
        voorvoegselAchternaam: data?._embedded?.medewerkerIdentificatie.voorvoegselAchternaam,
        achternaam: data?._embedded?.medewerkerIdentificatie.achternaam,
      },
      ...data,
    };

    return mappedData;
  };

  public getAll = async (): Promise<any> => {
    const {
      data: { _embedded },
    } = await Send(this._instance, "GET", "/contactmomenten");

    return _embedded.contactmomenten.map((message: any) => ({
      medewerkerNaam: {
        voorletters: message?._embedded?.medewerkerIdentificatie.voorletters,
        voorvoegselAchternaam: message?._embedded?.medewerkerIdentificatie.voorvoegselAchternaam,
        achternaam: message?._embedded?.medewerkerIdentificatie.achternaam,
      },
      ...message,
    }));
  };
}
