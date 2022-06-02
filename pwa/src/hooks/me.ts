import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useMe = () => {
  const API: APIService | null = React.useContext(APIContext);

  if (!API) return;

  const getMe = () =>
    useQuery<any, Error>(["me"], () => API.Me.getMe(), {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getMe };
};
