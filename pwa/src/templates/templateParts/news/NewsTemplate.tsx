import * as React from "react";
import * as styles from "./LoginTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { INewsTableItem, NewsTable } from "../../../components/newsTable/NewsTable";
import { useQueryClient } from "react-query";
import { useNews } from "../../../hooks/news";

export const NewsTemplate: React.FC = () => {
  const { t } = useTranslation();
  const [news, setNews] = React.useState<INewsTableItem[]>([]);

  const _useNews = useNews();
  const getNews = _useNews.getAll();

  React.useEffect(() => {
    if (!getNews.isSuccess) return;

    console.log(getNews.data);
    const _news: INewsTableItem[] = getNews.data.map((news) => ({
      content: news.content,
      date: news.date,
      id: news.id,
      title: news.title,
      taxonomies: news.taxonomies.openpub,
    }));
    console.log({ news: _news });
    setNews(_news);
  }, [getNews.isSuccess]);

  return (
    <div className={styles.container}>
      <div>
        <Heading1>{t("News")}</Heading1>
        <NewsTable news={news} />
      </div>
    </div>
  );
};
