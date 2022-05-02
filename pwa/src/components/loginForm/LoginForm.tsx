import * as React from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "./../../services/auth";
import APIContext from "../../apiService/apiContext";
import { Button, FormField, FormFieldInput, FormFieldLabel, Heading2 } from "@gemeente-denhaag/components-react";
import "./LoginForm.css";
import { useTranslation } from "react-i18next";
import { InputPassword, InputText } from "../formFields/input";

export const LoginForm: React.FC = () => {
  const API = React.useContext(APIContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = async (data: any) => {
    handleLogin(data, API);
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormFieldInput>
          <FormFieldLabel>{t("Username")}</FormFieldLabel>
          <InputText {...{ register, errors }} name="username" validation={{ required: true }} />
        </FormFieldInput>
      </FormField>
      <FormField>
        <FormFieldLabel>{t("Password")}</FormFieldLabel>
        <FormFieldInput>
          <InputPassword {...{ register, errors }} name="password" validation={{ required: true }} />
        </FormFieldInput>
      </FormField>

      <Button size="large" type="submit">
        {t("Send")}
      </Button>
    </form>
  );
};
