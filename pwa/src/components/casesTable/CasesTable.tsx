import * as React from "react";
import * as styles from "./CasesTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";

export interface ICaseTableItem {
  title: string;
  number: string;
  date: string;
  status: string;
}

interface CasesTableProps {
  cases: ICaseTableItem[];
}

export const CasesTable: React.FC<CasesTableProps> = ({ cases }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Title")}</TableHeader>
          <TableHeader>{t("Status")}</TableHeader>
          <TableHeader>{t("Date")}</TableHeader>
          <TableHeader />
        </TableRow>
        {cases.map(({ title, number, date, status }) => (
          <TableRow className={styles.contentRow}>
            <TableCell>{title}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{date}</TableCell>

            <TableCell onClick={() => navigate(`/my-cases/${number}`)}>
              <Link icon={<ArrowRightIcon />} iconAlign="start">
                {t("View case")}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
