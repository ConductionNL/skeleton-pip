import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputDate } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";

interface MovingStepProps {
  setNextStep: () => void;
}

export const DateFormStep: React.FC<MovingStepProps> = ({ setNextStep }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (): void => {
    setNextStep();
  };

  return (
    <FormStepTemplate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="date">{t("Moving date")}</FormFieldLabel>
          <InputDate name="date" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <button type="submit">
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {t("Next step")}
          </Link>
        </button>
      </form>
    </FormStepTemplate>
  );
};
