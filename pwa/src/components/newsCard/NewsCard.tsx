import * as React from "react";
import * as styles from "./NewsCard.module.css";
import { Heading1, Heading2, Paragraph } from "@gemeente-denhaag/components-react";

export interface NewsCardProps {
  id: string;
  title: string;
  content: string;
  date: Date;
  audiences: [];
  types: [];
  usages: [];
}

export const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, date, audiences, types, usages }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.title}>
          <Heading2>{title}</Heading2>
        </div>
        <div>
          {audiences.map((audience: any) => (
            <Heading1>{audience}</Heading1>
          ))}
          {types.map((type: any) => (
            <Heading1>{type}</Heading1>
          ))}
          {usages.map((usage: any) => (
            <Heading1>{usage}</Heading1>
          ))}
        </div>
        <Paragraph>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </Paragraph>
        <a className={styles.date}>Geplaatst op: {date}</a>
      </div>
    </div>
  );
};
