import { navigate } from "gatsby";
import * as React from "react";
import { useDigiD } from "../hooks/useDigiD";

const digidResponse: React.FC = () => {
  useDigiD().authenticate();
  return <></>;
};

export default digidResponse;
