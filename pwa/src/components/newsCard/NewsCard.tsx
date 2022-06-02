import * as React from "react";
import * as styles from "./NewsCard.module.css";
import { Heading1, Heading2, Paragraph } from "@gemeente-denhaag/components-react";

export interface NewsCardProps {
  id: string;
  title: string;
  content: string;
  date: Date;
  audiences: string;
  type: string;
  usage: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, date, audiences, type, usage }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.title}>
          <Heading2>{title}</Heading2>
        </div>
        <div>
            <Heading1>{audiences.name}</Heading1>
          ))}
          <Heading1>{type}</Heading1>
          <Heading1>{usage}</Heading1>
        </div>
        <Paragraph>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Paragraph>
        <a className={styles.date}>Geplaatst op: {date}</a>
      </div>
    </div>
  );
};
