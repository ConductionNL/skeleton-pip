import * as React from "react";
import * as styles from "./ImageAndDetailsCard.module.css";
import clsx from "clsx";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";

interface ImageAndDetailsCardProps {
  image?: JSX.Element;
  title: string;
  date?: string;
  introduction?: string;
  layoutClassName?: string;
  link: {
    href: string;
    label: string;
  };
}

export const ImageAndDetailsCard: React.FC<ImageAndDetailsCardProps> = ({
  image,
  title,
  date,
  introduction,
  link,
  layoutClassName,
}) => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.content} onClick={() => navigate(link.href)}>
        <div className={styles.image}>{image}</div>
        <div className={styles.context}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.introduction}>{introduction}</span>
          <div className={styles.link}>
            <Link icon={<ArrowRightIcon />} iconAlign="start">
              {link.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
