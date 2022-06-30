import * as React from "react";
import { PageProps } from "gatsby";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { NewsDetailTemplate } from "../../../templates/templateParts/newsDetail/NewsDetailTemplate";

const NewsDetailPage: React.FC<PageProps> = (props: PageProps) => {
  return (
    <DashboardTemplate>
      <NewsDetailTemplate newsId={props.params.newsId} />
    </DashboardTemplate>
  );
};

export default NewsDetailPage;
