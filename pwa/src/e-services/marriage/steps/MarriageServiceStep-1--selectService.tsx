import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputText } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";

interface MarriageStepProps {
  setNextStep: () => void;
}

export const SelectServiceFormStep: React.FC<MarriageStepProps> = ({ setNextStep }) => {
  const [formData, setFormData] = React.useContext(MarriageServiceContext);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("selectService", formData.selectService);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, selectService: data.selectService });
    setNextStep();
  };

  return (
    <FormStepTemplate title={t("Choice of marriage, partnership or conversion?")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="selectService">{t("Select service")}</FormFieldLabel>
          <InputText name="selectService" {...{ register, errors }} validation={{ required: true }} />
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
