import { Send } from "../apiService";
import { AxiosInstance } from "axios";
import { resourceArrayToSelectArray } from "../../services/resourceArrayToSelectArray";

export default class Message {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", "/messages");

    const mappedMessages = data.map((message: any) => {
      return { ...message, applications: resourceArrayToSelectArray(message.applications, "applications") };
    });

    return mappedMessages;
  };

  public getSelect = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", "/messages");

    const selectData = data.map((message: any) => {
      return { label: message.name, name: message.name, id: message.name, value: `/admin/messages/${message.id}` };
    });

    return selectData;
  };

  public getOne = async (id: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/messages/${id}`);

    data.applications = resourceArrayToSelectArray(data.applications, "applications");

    return data;
  };

  public createOrUpdate = async (variables: { payload: any; id: string }): Promise<any> => {
    const { payload, id } = variables;

    if (id) {
      const { data } = await Send(this._instance, "PUT", `/messages/${id}`, payload);
      data.applications = resourceArrayToSelectArray(data.applications, "applications");
      return data;
    }

    const { data } = await Send(this._instance, "POST", "/messages", payload);
    data.applications = resourceArrayToSelectArray(data.applications, "applications");
    return data;
  };

  public delete = async (variables: { id: string }): Promise<any> => {
    const { data } = await Send(this._instance, "DELETE", `/messages/${variables.id}`);
    return data;
  };
}
