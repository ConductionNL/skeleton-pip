import * as React from "react";
import * as styles from "./NewsCard.module.css";
import { Heading2, Paragraph } from "@gemeente-denhaag/components-react";

export interface INewsCardItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  taxonomies: string;
}

interface NewsCardProps {
  news: INewsCardItem[];
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div>
      {news.map((_news) => (
        <div className={styles.card}>
          <div className={styles.title}>
            <Heading2>{_news.title}</Heading2>
          </div>
          <Paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: _news.content,
              }}
            ></div>
          </Paragraph>
          <a className={styles.date}>Geplaatst op: {_news.date}</a>
        </div>
      ))}
    </div>
  );
};
