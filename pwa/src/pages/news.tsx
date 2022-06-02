import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { NewsTemplate } from "../templates/templateParts/news/NewsTemplate";

const NewsPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <NewsTemplate />
    </DashboardTemplate>
  );
};

export default NewsPage;