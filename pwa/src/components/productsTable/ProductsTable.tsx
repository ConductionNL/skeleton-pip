import * as React from "react";
import * as styles from "./ProductsTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";

export interface IProductTableItem {
  id: string;
  content: string;
  title: string;
  date: Date;
}

interface ProductTableProps {
  products: IProductTableItem[];
}
export const ProductsTable: React.FC<ProductTableProps> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Title")}</TableHeader>
          <TableHeader>{t("Date")}</TableHeader>
          <TableHeader>{t("Content")}</TableHeader>
          <TableHeader />
        </TableRow>
        {products.map((_product) => (
          <TableRow key={_product.id} className={styles.contentRow}>
            <TableCell>{_product.title}</TableCell>
            <TableCell>{_product.date}</TableCell>
            <TableCell>{_product.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
