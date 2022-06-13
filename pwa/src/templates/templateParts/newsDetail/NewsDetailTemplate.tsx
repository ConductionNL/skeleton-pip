import * as React from "react";
import * as styles from "./NewsDetailTemplate.module.css";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";
import { Heading2, Paragraph } from "@gemeente-denhaag/components-react";
import { Tag } from "@conduction/components";

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

  return (
    <div>
      {getNews.isLoading && <Skeleton height="100px" />}
      <>
        {!getNews.isLoading && (
          <div>
            <div>
              <div className={styles.title}>
                <Heading2>{getNews.data.title}</Heading2>
              </div>
              <div className={styles.tags}>
                <Tag tag={getNews.data.audiences} />
                <Tag tag={getNews.data.type} />
                <Tag tag={getNews.data.usage} />
              </div>

              <Paragraph>
                <div
                  dangerouslySetInnerHTML={{
                    __html: getNews.data.content,
                  }}
                ></div>
              </Paragraph>
              <a className={styles.date}>Geplaatst op: {getNews.data.date}</a>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
