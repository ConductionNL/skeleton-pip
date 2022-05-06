import * as React from "react";
import { TextArea } from "@gemeente-denhaag/textarea";
import { IFormFieldProps, IReactHookFormProps } from "./types";

export const Textarea: React.FC<IFormFieldProps & IReactHookFormProps> = ({ name, validation, register, errors }) => (
  <TextArea {...register(name, { ...validation })} invalid={errors[name]} />
);
