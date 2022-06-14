import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import Skeleton from "react-loading-skeleton";
import { navigate } from "gatsby";
import { useQueryClient } from "react-query";
import { DetailsCard } from "@conduction/components";

export const NewsTemplate: React.FC = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const _useNews = useNews(queryClient);
  const getNews = _useNews.getAll();

  React.useEffect(() => {
    if (!getNews.isSuccess) return;
  }, [getNews.isSuccess]);

  return (
    <div>
      <Heading1>{t("News")}</Heading1>
      {getNews.isLoading && <Skeleton height="100px" />}
      <>
        {!getNews.isLoading && (
          <div>
            {getNews.data?.map((newsItem) => (
              <div key={newsItem.id} onClick={() => navigate(`/news/${newsItem.id}`)}>
                <DetailsCard
                  title={newsItem.title}
                  introduction={""}
                  link={{ label: t("Read more") + "...", href: `/news/${newsItem.id}` }}
                  tags={[newsItem.audiences, newsItem.type, newsItem.usage]}
                  subHeader={newsItem.date}
                />
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};
