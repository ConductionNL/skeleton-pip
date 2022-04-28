import * as React from "react";
import "./imageDivider.css";

interface ImageDividerProps {
  image: string;
  type: "small" | "large";
}

export const ImageDivider: React.FC<ImageDividerProps> = ({ image, type }) => {
  return <img src={image} className={`ImageDivider ImageDivider-${type}`} />;
};
