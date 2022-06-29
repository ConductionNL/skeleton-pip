import * as React from "react";

export interface IMarriageServiceData {
  selectService: string;
  date: string;
  weddingOfficiant: string[];
  weddingVenue: string[];
  partner: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  };
  witnesses: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  }[];
  additionalProducts: string[];
}

export const marriageServiceData = {} as IMarriageServiceData;

export const MarriageServiceContext = React.createContext<[IMarriageServiceData, (data: IMarriageServiceData) => void]>(
  [marriageServiceData, () => null],
);

export const MarriageServiceProvider = MarriageServiceContext.Provider;
