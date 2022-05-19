import * as React from "react";
import * as styles from "./HorizontalImageCard.module.css";
import clsx from "clsx";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

interface HorizontalImageCardProps {
  iconOrImage: JSX.Element;
  title: string;
  layoutClassName?: string;
  external?: boolean;
  link: {
    label: string;
    href: string;
  };
}

export const HorizontalImageCard: React.FC<HorizontalImageCardProps> = ({
  title,
  layoutClassName,
  external,
  link,
  iconOrImage,
}) => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.content} onClick={() => navigate(link.href)}>
        <div className={styles.image}>{iconOrImage}</div>
        <div className={styles.context}>
          <div className={styles.title}>{title}</div>
          <Link icon={external ? <ExternalLinkIcon /> : <ArrowRightIcon />} iconAlign="start">
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
};
