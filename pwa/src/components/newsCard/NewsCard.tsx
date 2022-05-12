import * as React from "react";
import * as styles from "./NewsCard.module.css";
import { Heading2, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";

export interface INewsCardItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  image: string;
}

interface NewsCardProps {
  news: INewsCardItem[];
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const { t } = useTranslation();

  return (
    <div>
      {news.map((_news) => (
        <div className={styles.title}>
          <Heading2>{_news.title}</Heading2>
          <div
            className={styles.image}
            dangerouslySetInnerHTML={{
              __html: _news.image,
            }}
          ></div>
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
