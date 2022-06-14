import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useProduct = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getOne = (productId: string) =>
    useQuery<any, Error>(["product", productId], () => API.Product.getOne(productId), {
      initialData: () => queryClient.getQueryData<any[]>("product")?.find((_product) => _product.id === productId),
      onError: (error) => {
        throw new Error(error.message);
      },
      enabled: !!productId,
    });

  const getAll = () =>
    useQuery<any[], Error>("products", API.Product.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll, getOne };
};
