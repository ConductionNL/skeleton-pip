import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useBag = () => {
  const API: APIService = React.useContext(APIContext);

  const getAdressen = () =>
    useQuery<any[], Error>("bag", API.Bag.getAdressen, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  const getAdressenuitgebreid = () =>
    useQuery<any[], Error>("bag", API.Bag.getAdressenuitgebreid, {
      onError: (error) => { 
        throw new Error(error.message);
      },
    });

  return { getAdressen, getAdressenuitgebreid };
};
