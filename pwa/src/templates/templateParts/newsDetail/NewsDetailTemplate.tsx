import * as React from "react";
import * as styles from "./NewsDetailTemplate.module.css";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";
import { Divider, Heading1, Paragraph } from "@gemeente-denhaag/components-react";
import { Tag } from "@conduction/components";
import { translateDate } from "../../../services/dateFormat";

interface NewsDetailTemplateProps {
  newsId: string;
}

export const NewsDetailTemplate: React.FC<NewsDetailTemplateProps> = ({ newsId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const _useNews = useNews(queryClient);
  const getNews = _useNews.getOne(newsId);

  React.useEffect(() => {
    if (!getNews.isSuccess) return;
  }, [getNews.isSuccess]);

  return (
    <div>
      {!getNews.isLoading && (
        <div className={styles.content}>
          <Heading1>{getNews.data.title}</Heading1>
          <Paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: getNews.data.content,
              }}
            ></div>
          </Paragraph>

          <Divider />
          
          <div className={styles.bottom}>
            <div className={styles.tags}>
              <Tag tag={getNews.data.audiences} />
              <Tag tag={getNews.data.type} />
              <Tag tag={getNews.data.usage} />
            </div>
            <span className={styles.date}>
              {t("Posted")}: {translateDate(i18n.language, getNews.data.date)}
            </span>
          </div>
        </div>
      )}

      {getNews.isLoading && <Skeleton height="100px" />}
    </div>
  );
};
