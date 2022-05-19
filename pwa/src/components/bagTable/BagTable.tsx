import * as React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";

interface BagTableProps {
  Bag: any[];
}

export const BagTable: React.FC<BagTableProps> = ({ Bag }) => {
  const { t, i18n } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Naam")}</TableHeader>
          <TableHeader>{t("Postcode")}</TableHeader>
          <TableHeader>{t("Woonplaats")}</TableHeader>
          <TableHeader />
        </TableRow>
        {Bag.map((_bag) => (
          <TableRow key={_bag.id}>
            <TableCell>{_bag.openbareRuimteNaam}</TableCell>
            <TableCell>{_bag.postcode}</TableCell>
            <TableCell>{_bag.woonplaatsNaam}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
