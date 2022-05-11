import * as React from "react";
import * as styles from "./NewsTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";

export interface INewsTableItem {
  id: string;
  content: string;
  title: string;
  date: Date;
  taxonomies: [];
}

interface NewsTableProps {
  news: INewsTableItem[];
}

export const NewsTable: React.FC<NewsTableProps> = ({ news }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Title")}</TableHeader>
          <TableHeader>{t("Date")}</TableHeader>
          <TableHeader>{t("Content")}</TableHeader>
          <TableHeader>{t("taxonomies")}</TableHeader>

          <TableHeader />
        </TableRow>
        {news.map((_news) => (
          <TableRow key={_news.id} className={styles.contentRow}>
            <TableCell>{_news.title}</TableCell>
            <TableCell>{_news.date}</TableCell>
            <TableCell>
              <div
                dangerouslySetInnerHTML={{
                  __html: _news.content,
                }}
              ></div>
            </TableCell>
            <TableCell>{_news.taxonomies}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
