import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/news";
import Skeleton from "react-loading-skeleton";
import { RichContentCard } from "../../../components/card";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";
import { useQueryClient } from "react-query";

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
      <div>
        <Heading1>{t("News")}</Heading1>
        {getNews.isLoading && <Skeleton height="100px" />}
        <>
          {!getNews.isLoading && (
            <div>
              {getNews.data?.map((newsItem) => (
                <div onClick={() => navigate(`/news/${newsItem.id}`)}>
                  <RichContentCard
                    link={[{ label: newsItem.title, href: `/news/${newsItem.id}` }]}
                    tags={[newsItem.audiences, newsItem.type, newsItem.usage]}
                    labelsWithIcon={[{ label: newsItem.title, icon: <ArrowRightIcon /> }]}
                    contentLinks={[
                      {
                        title: newsItem.title,
                        subTitle: (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: newsItem.content,
                            }}
                          ></div>
                        ),
                      },
                    ]}
                  />
                  {/* <NewsCard
                    id={newsItem.id}
                    title={newsItem.title}
                    content={newsItem.content}
                    date={newsItem.date}
                    audiences={newsItem.audiences}
                    types={newsItem.type}
                    usages={newsItem.usage}
                  /> */}
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

const link = [{ label: "test", href: "test" }];
const contentLinks = [
  {
    title: "Wijzig je wachtwoord!",
    subTitle:
      "Er zijn zwakke wachtwoorden gededecteerd door team beveiliging. Iedereen is verplicht zijn wachtwoord voor 15/08/2020 te wijzigingen anders wordt dit geautomatiseerd en moet je je account opnieuw ophalen.",
    href: "test",
  },
];
const tags = ["test1", "test2"];
const icon = [{ label: "test", icon: <ArrowRightIcon /> }];
