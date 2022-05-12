import * as React from "react";
import * as styles from "./NewsTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { INewsCardItem, NewsCard } from "../../../components/newsCard/NewsCard";
import { useNews } from "../../../hooks/news";

export const NewsTemplate: React.FC = () => {
  const { t } = useTranslation();
  const [news, setNews] = React.useState<any[]>([]);

  const _useNews = useNews();
  const getNews = _useNews.getAll();

  React.useEffect(() => {
    if (!getNews.isSuccess) return;

    const _news: INewsCardItem[] = getNews.data.map((news) => ({
      id: news.id,
      title: news.title,
      content: news.content,
      date: news.date,
      image: news.image.rendered,
    }));
    setNews(_news);
  }, [getNews.isSuccess]);
  return (
    <div>
      <div>
        <Heading1>{t("News")}</Heading1>
        <div >
          <NewsCard news={news} />
        </div>
      </div>
    </div>
  );
};
