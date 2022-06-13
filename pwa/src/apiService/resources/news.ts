import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class News {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    _instance.interceptors.request.use(function (config) {
      return {
        ...config,
        params: { extend: ["taxonomies.openpubAudience", "taxonomies.openpubType", "taxonomies.openpubUsage"] },
      };
    });

    this._instance = _instance;
  }

  public getOne = async (id: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/nieuws/${id}`);
    const newsItem: any = {
      id: data.id,
      title: data.title,
      content: data.content,
      date: data.date,
    };

    newsItem.audiences = data._embedded.taxonomies._embedded.openpubAudience.map((audience: any) => audience.name);
    newsItem.type = data._embedded.taxonomies._embedded.openpubType.map((type: any) => type.name);
    newsItem.usage = data._embedded.taxonomies._embedded.openpubUsage.map((usage: any) => usage.name);

    return newsItem;
  };

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
      _newsItem.type = newsItem._embedded.taxonomies._embedded.openpubType.map((type: any) => type.name);
      _newsItem.usage = newsItem._embedded.taxonomies._embedded.openpubUsage.map((usage: any) => usage.name);
      return _newsItem;
    });

    return newsItems;
  };
}
