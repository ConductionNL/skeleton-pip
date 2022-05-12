import { TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import * as styles from "./EditableTableRow.module.css";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link, TextField } from "@gemeente-denhaag/components-react";
import { CheckedIcon, CloseIcon, EditIcon } from "@gemeente-denhaag/icons";

interface EditableTableRowProps {
  thead: string;
  value: string;
}

export const EditableTableRow: React.FC<EditableTableRowProps> = ({ thead, value }) => {
  const [editing, setEditing] = React.useState<boolean>(false);

  return (
    <TableRow>
      <TableHeader className={styles.th}>{thead}</TableHeader>

      {editing && <EditingTableRow {...{ value, setEditing }} />}
      {!editing && <RegularTableRow {...{ value, setEditing }} />}
    </TableRow>
  );
};

/**
 * Specific rows based on editing (Regular: not editing & Editing: editing)
 */

interface SpecificRowsProps {
  value: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegularTableRow: React.FC<SpecificRowsProps> = ({ value, setEditing }) => {
  const { t } = useTranslation();

  return (
    <>
      <TableCell>{value}</TableCell>

      <TableCell>
        <div className={styles.edit} onClick={() => setEditing(true)}>
          <Link icon={<EditIcon />} iconAlign="start">
            {t("Edit")}
          </Link>
        </div>
      </TableCell>
    </>
  );
};

const EditingTableRow: React.FC<SpecificRowsProps> = ({ value, setEditing }) => {
  const { t } = useTranslation();

  return (
    <>
      <TableCell>
        <TextField defaultValue={value} />

        <div className={styles.editButtonsContainer}>
          <div onClick={() => setEditing(false)}>
            <Link icon={<CheckedIcon />} iconAlign="start">
              {t("Save")}
            </Link>
          </div>
          <div onClick={() => setEditing(false)}>
            <Link icon={<CloseIcon />} iconAlign="start" className={styles.cancel}>
              {t("Cancel")}
            </Link>
          </div>
        </div>
      </TableCell>

      <TableCell />
    </>
  );
};
