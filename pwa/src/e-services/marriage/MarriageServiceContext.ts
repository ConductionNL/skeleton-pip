import * as React from "react";

export interface IMarriageServiceData {
  selectService: string;
  date: string;
  houseNumber: string;
  coMovers: string[];
}

export const marriageServiceData = {} as IMarriageServiceData;

export const MarriageServiceContext = React.createContext<[IMarriageServiceData, (data: IMarriageServiceData) => void]>([
  marriageServiceData,
  () => null,
]);

export const MarriageServiceProvider = MarriageServiceContext.Provider;
