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

    const newsItems = _embedded.nieuws.map((newsItem: any) => {
      const _newsItem: any = {
        id: newsItem.id,
        title: newsItem.title,
        content: newsItem.content,
        date: newsItem.date,
      };

      _newsItem.audiences = newsItem._embedded.taxonomies._embedded.openpubAudience.map(
        (audience: any) => audience.name,
      );
      return _newsItem;
    });

    return newsItems;
  };
}
