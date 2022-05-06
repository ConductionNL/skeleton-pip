import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IFormFieldProps, IReactHookFormProps } from "./types";

export const InputPassword: React.FC<IFormFieldProps & IReactHookFormProps > = ({ name, validation, register, errors }) => {
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

export const InputText: React.FC<IFormFieldProps & IReactHookFormProps> = ({ name, validation, register, errors }) => (
  <TextField type="text" {...register(name, { ...validation })} invalid={errors[name]} />
);
