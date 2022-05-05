import * as React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import { navigate } from "gatsby-link";
import { addItem, deleteItem, updateItem } from "../services/mutateQueries";

export const useEndpoint = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getOne = (endpointId: string) =>
    useQuery<any, Error>(["endpoints", endpointId], () => API.Endpoint.getOne(endpointId), {
      initialData: () => queryClient.getQueryData<any[]>("endpoints")?.find((endpoint) => endpoint.id === endpointId),
      onError: (error) => {
      },
      enabled: !!endpointId,
    });

  const getAll = () =>
    useQuery<any[], Error>("endpoints", API.Endpoint.getAll, {
      onError: (error) => {
      },
    });

  const getSelect = () =>
    useQuery<any[], Error>("endpoints-select", API.Endpoint.getSelect, {
      onError: (error) => {
      },
    });

  const remove = () =>
    useMutation<any, Error, any>(API.Endpoint.delete, {
      onMutate: () => {
      },
      onSuccess: async (_, variables) => {
        deleteItem(queryClient, "endpoints", variables.id);
      },
      onError: (error) => {
      },
      onSettled: () => {
      },
    });

  const createOrEdit = (endpointId?: string) =>
    useMutation<any, Error, any>(API.Endpoint.createOrUpdate, {
      onMutate: () => {
      },
      onSuccess: async (newEndpoint) => {
        if (endpointId) {
          updateItem(queryClient, "endpoints", newEndpoint);
          navigate("/endpoints");
        }

        if (!endpointId) {
          addItem(queryClient, "endpoints", newEndpoint);
          navigate(`/endpoints/${newEndpoint.id}`);
        }
      },
      onError: (error) => {
      },
      onSettled: () => {
      },
    });

  return { getOne, getAll, getSelect, remove, createOrEdit };
};
