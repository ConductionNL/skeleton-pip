import * as React from "react";
import * as styles from "./NewsTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import Skeleton from "react-loading-skeleton";
import { navigate } from "gatsby";
import { useQueryClient } from "react-query";
import { DetailsCard } from "@conduction/components";
import { translateDate } from "../../../services/dateFormat";

export const NewsTemplate: React.FC = () => {
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const _useNews = useNews(queryClient);
  const getNews = _useNews.getAll();

  return (
    <div className={styles.content}>
      <Heading1 className={styles.heading}>{t("News")}</Heading1>

      {!getNews.isLoading && (
        <div>
          {getNews.data?.map((newsItem) => (
            <div key={newsItem.id} onClick={() => navigate(`/news/${newsItem.id}`)}>
              <DetailsCard
                title={newsItem.title}
                introduction={""}
                link={{ label: t("Read more"), href: `/news/${newsItem.id}` }}
                tags={[newsItem.audiences, newsItem.type, newsItem.usage]}
                subHeader={translateDate(i18n.language, newsItem.date)}
              />
            </div>
          ))}
        </div>
      )}

      {getNews.isLoading && <Skeleton height="100px" />}
    </div>
  );
};
