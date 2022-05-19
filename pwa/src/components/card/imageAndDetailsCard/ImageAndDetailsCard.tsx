import * as React from "react";
import * as styles from "./ImageAndDetailsCard.module.css";
import clsx from "clsx";
import { Button, Heading5, Paragraph } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";

interface ImageAndDetailsCardProps {
  image?: JSX.Element;
  title: string;
  date?: string;
  paragraph: string;
  layoutClassName?: string;
  button: {
    href: string;
    label: string;
  };
}

export const ImageAndDetailsCard: React.FC<ImageAndDetailsCardProps> = ({
  image,
  title,
  date,
  paragraph,
  button,
  layoutClassName,
}) => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.content} onClick={() => navigate(button.href)}>
        <div className={styles.image}>{image}</div>
        <div className={styles.context}>
          <Heading5>{title}</Heading5>
          <Paragraph className={styles.date}>{date}</Paragraph>
          <Paragraph className={styles.paragraph}>{paragraph}</Paragraph>
          <Button className={styles.button}>{button.label}</Button>
        </div>
      </div>
    </div>
  );
};
