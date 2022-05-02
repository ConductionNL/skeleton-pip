import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputPasswordProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ name, validation, register }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...register(name, { ...validation })}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};
