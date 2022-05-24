import * as React from "react";
import * as styles from "./Checkbox.module.css";
import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "../types";

interface ICheckboxProps {
  label: string;
  name: string;
}

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
}) => <FormControlLabel input={<input type="checkbox" {...register(name, { ...validation })} />} {...{ label }} />;

interface ICheckboxCardProps {
  name: string;
  content: JSX.Element;
}

export const InputCheckboxCard: React.FC<ICheckboxCardProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  content,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className={styles.card} onClick={() => setChecked(!checked)}>
      <input type="checkbox" {...register(name, { ...validation })} checked={checked} />

      {content}
    </div>
  );
};
