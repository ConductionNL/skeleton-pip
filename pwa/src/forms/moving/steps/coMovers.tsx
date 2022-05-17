import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";

interface MovingStepProps {
  setNextStep: () => void;
  setPreviousStep: () => void;
}

export const CoMoversStep: React.FC<MovingStepProps> = ({ setNextStep, setPreviousStep }) => {
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
    <FormStepTemplate {...{ setPreviousStep }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="testMover1">Person 1</label>
        <input type="checkbox" {...register("testMover1")} />

        <label htmlFor="testMover2">Person 2</label>
        <input type="checkbox" {...register("testMover2")} />

        <label htmlFor="testMover3">Person 3</label>
        <input type="checkbox" {...register("testMover3")} />

        <button type="submit">
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {t("Next step")}
          </Link>
        </button>
      </form>
    </FormStepTemplate>
  );
};
