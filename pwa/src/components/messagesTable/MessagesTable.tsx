import * as React from "react";
import * as styles from "./MessagesTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";
import dateFormat from "dateformat";

export interface IMessageTableItem {
  organisation: string;
  date: Date;
  id: string;
}

interface MessagesTableProps {
  messages: IMessageTableItem[];
}

export const MessagesTable: React.FC<MessagesTableProps> = ({ messages }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Organisation")}</TableHeader>
          <TableHeader>{t("Date")}</TableHeader>
          <TableHeader />
        </TableRow>
        {messages.map(({ organisation, date, id }) => (
          <TableRow key={id} className={styles.contentRow}>
            <TableCell>{organisation}</TableCell>
            <TableCell>{dateFormat(date, "dd-mm-yyyy")}</TableCell>

            <TableCell onClick={() => navigate(`/my-messages/${id}`)}>
              <Link icon={<ArrowRightIcon />} iconAlign="start">
                {t("View message")}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
