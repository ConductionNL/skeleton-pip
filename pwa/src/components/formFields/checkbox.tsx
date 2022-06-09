import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { ICheckboxProps, IReactHookFormProps } from "./types";

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
}) => <FormControlLabel input={<input type="checkbox" {...register(name, { ...validation })} />} {...{ label }} />;

export const InputRadio: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
}) => <FormControlLabel input={<input type="radio" {...register(name, { ...validation })} />} {...{ label }} />;
