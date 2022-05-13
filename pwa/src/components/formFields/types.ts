import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IReactHookFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

export interface IFormFieldProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}
