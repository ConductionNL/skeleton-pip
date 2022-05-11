import * as React from "react";
import * as styles from "./MyAccountTemplate.module.css";
import { Heading1, Heading3, Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader } from "@gemeente-denhaag/table";
import { ArrowRightIcon, EditIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

export const MyAccountTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1 className={styles.heading}>{t("My account")}</Heading1>

      <div className={styles.block}>
        <Heading3>{t("Contact")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>{t("Email address")}</TableHeader>
              <TableCell>john@doe.com</TableCell>
              <TableCell>
                <Link icon={<EditIcon />} iconAlign="start">
                  {t("Edit")}
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Phone number")}</TableHeader>
              <TableCell>06 000 000 00</TableCell>
              <TableCell>
                <Link icon={<EditIcon />} iconAlign="start">
                  {t("Edit")}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Notifications and updates")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>{t("Case updates")}</TableHeader>
              <TableCell>Update</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("News about my neighbourhood")}</TableHeader>
              <TableCell>News</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Tips")}</TableHeader>
              <TableCell>Tips</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Personal details")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>{t("First names")}</TableHeader>
              <TableCell>Urbain Achilles Anna Maria</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Last name")}</TableHeader>
              <TableCell>Zijda</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Gender")}</TableHeader>
              <TableCell>man</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Citizen service number")}</TableHeader>
              <TableCell>900050287</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Date of birth")}</TableHeader>
              <TableCell>6 juni 1967</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Place of birth")}</TableHeader>
              <TableCell>Pakistan</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Nationality")}</TableHeader>
              <TableCell>Nederlandse</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Address")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>Street</TableHeader>
              <TableCell>Gagelplein 5</TableCell>
              <TableCell>
                <Link icon={<ArrowRightIcon />} iconAlign="start">
                  {t("Report your move")}
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Postal code and city")}</TableHeader>
              <TableCell>2563 TT Den Haag</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Number of people on your address")}</TableHeader>
              <TableCell>3</TableCell>
              <TableCell>
                <Link icon={<ArrowRightIcon />} iconAlign="start">
                  {t("Report incorrect registrations")}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
