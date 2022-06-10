import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useNews = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getOne = (newsId: string) =>
    useQuery<any, Error>(["news", newsId], () => API.News.getOne(newsId), {
      initialData: () => queryClient.getQueryData<any[]>("news")?.find((_news) => _news.id === newsId),
      onError: (error) => {
        throw new Error(error.message);
      },
      enabled: !!newsId,
    });

  const getAll = () =>
    useQuery<any[], Error>("news", API.News.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll, getOne };
};
