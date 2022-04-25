import * as React from "react";
import "./Container.css";

export const Container: React.FC = ({ children }) => {
  return <div className="Container">{children}</div>;
};
