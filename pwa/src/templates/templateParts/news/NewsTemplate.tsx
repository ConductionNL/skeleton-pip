import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { NewsCard } from "../../../components/newsCard/NewsCard";
import { useNews } from "../../../hooks/news";
import Skeleton from "react-loading-skeleton";

export const NewsTemplate: React.FC = () => {
  const { t } = useTranslation();

  const _useNews = useNews();
  const getNews = _useNews.getAll();

  React.useEffect(() => {
    if (!getNews.isSuccess) return;
  }, [getNews.isSuccess]);

  return (
    <div>
      <div>
        <Heading1>{t("News")}</Heading1>
        {getNews.isLoading && <Skeleton height="100px" />}
        <>
          {!getNews.isLoading && (
            <div>
              {getNews.data?.map((newsItem) => (
                <NewsCard
                  id={newsItem.id}
                  title={newsItem.title}
                  content={newsItem.content}
                  date={newsItem.date}
                  audiences={newsItem.audiences}
                  types={newsItem.type}
                  usages={newsItem.usage}
                />
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};
