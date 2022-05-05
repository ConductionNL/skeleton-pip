import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useCase = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getAll = () =>
    useQuery<any[], Error>("cases", API.Case.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll };
};
