import * as React from "react";
import "./imageDivider.css";

interface ImageDividerProps {
  image: string;
  layoutClassName: string;
}

export const ImageDivider: React.FC<ImageDividerProps> = ({ image, layoutClassName }) => {
  return <img src={image} className={`ImageDivider ${layoutClassName}`} />;
};
