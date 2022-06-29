import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useMessage = (queryClient: QueryClient) => {
  const API: APIService | null = React.useContext(APIContext);

  const getOne = (messageId: string) =>
    useQuery<any, Error>(["messages", messageId], () => API.Message.getOne(messageId), {
      initialData: () => queryClient.getQueryData<any[]>("messages")?.find((_message) => _message.id === messageId),
      onError: (error) => {
        throw new Error(error.message);
      },
      enabled: !!messageId,
    });

  const getAll = () =>
    useQuery<any[], Error>("messages", API.Message.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getOne, getAll };
};
