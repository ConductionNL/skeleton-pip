import * as React from "react";
import "./imageDivider.css";

interface ImageDividerProps {
  image: string;
  layoutClassName: string;
}

export const AuthenticatedImageDivider: React.FC<ImageDividerProps> = ({ image, layoutClassName }) => {
  return <img src={image} className={`ImageDivider ${layoutClassName}`} />;
};

export const UnauthenticatedImageDivider: React.FC<ImageDividerProps> = ({ image, layoutClassName }) => {
  return <img src={image} className={`ImageDivider ${layoutClassName}`} />;
};
