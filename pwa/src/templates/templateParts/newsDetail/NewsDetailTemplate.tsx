import * as React from "react";
// import * as styles from "./NewsDetailTemplate.module.css";
import { NewsCard } from "../../../components/newsCard/NewsCard";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";

interface NewsDetailTemplateProps {
  newsId: string;
}

export const NewsDetailTemplate: React.FC<NewsDetailTemplateProps> = ({ newsId }) => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const _useNews = useNews(queryClient);
  const getNews = _useNews.getOne(newsId);

  React.useEffect(() => {
    if (!getNews.isSuccess) return;
  }, [getNews.isSuccess]);

  console.log(getNews.data);
  return (
    <div>
      {getNews.isLoading && <Skeleton height="100px" />}
      <>
        {!getNews.isLoading && (
          <NewsCard
            id={getNews.data.id}
            title={getNews.data.title}
            content={getNews.data.content}
            date={getNews.data.date}
            audiences={getNews.data.audiences}
            types={getNews.data.type}
            usages={getNews.data.usage}
          />
        )}
      </>
    </div>
  );
};
