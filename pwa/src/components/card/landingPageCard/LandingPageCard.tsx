import * as React from "react";
import * as styles from "./LandingPageCard.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

interface LandingPageCardProps {
  icon?: JSX.Element;
  title?: string;
  layoutClassName?: string;
  external?: boolean;
  img?: string;
  link: string;
  label: string;
}

export const LandingPageCard: React.FC<LandingPageCardProps> = ({
  icon,
  title,
  layoutClassName,
  external,
  link,
  img,
  label,
}) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      {external === true ? (
        <div className={styles.content} onClick={() => navigate(`${link}`)}>
          <img className={styles.img} src={img} />
          <div className={styles.text}>
            <div className={styles.label}>{label}</div>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              {title}
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.content} onClick={() => navigate(`${link}`)}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.text}>
            <div className={styles.label}>{label}</div>
            <Link icon={<ArrowRightIcon />} iconAlign="start">
              {title}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
