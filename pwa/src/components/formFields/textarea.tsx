import * as React from "react";
import { TextArea } from "@gemeente-denhaag/textarea";
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  errors: FieldErrors;
}

export const Textarea: React.FC<InputProps> = ({ name, validation, register, errors }) => (
  <TextArea {...register(name, { ...validation })} invalid={errors[name]} />
);
