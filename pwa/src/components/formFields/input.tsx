import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  errors: FieldErrors;
}

export const InputPassword: React.FC<InputProps> = ({ name, validation, register, errors }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};

export const InputText: React.FC<InputProps> = ({ name, validation, register, errors }) => (
  <TextField type="text" {...register(name, { ...validation })} invalid={errors[name]} />
);
