import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IFormFieldProps, IReactHookFormProps } from "./types";

export const InputPassword: React.FC<IFormFieldProps & IReactHookFormProps> = ({
  disabled,
  name,
  validation,
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...{ disabled }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};

export const InputText: React.FC<IFormFieldProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}) => (
  <TextField
    type="text"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputEmail: React.FC<IFormFieldProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}) => (
  <TextField
    type="email"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);
