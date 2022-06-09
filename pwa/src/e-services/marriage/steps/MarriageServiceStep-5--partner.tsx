import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputNumber, InputText } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";


interface MarriageStepProps {
  setNextStep: () => void;
  handleSetStep: React.Dispatch<React.SetStateAction<TMarriageFormServiceSteps>>;
}

export const PartnerStep: React.FC<MarriageStepProps> = ({ setNextStep, handleSetStep }) => {
  const [formData, setFormData] = React.useContext(MarriageServiceContext);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {

    setValue("firstName", formData.partner.firstName);
    setValue("lastName", formData.partner.lastName);
    setValue("lastName", formData.partner.lastName);
    setValue("lastName", formData.partner.lastName);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, zipCode: data.zipCode, houseNumber: data.houseNumber });
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    setFormData({ ...formData, zipCode: getValues("zipCode"), houseNumber: getValues("houseNumber") });
    handleSetStep("date");
  };

  return (
    <FormStepTemplate title={t("Add your partner.")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="zipCode">{t("Zip code")}</FormFieldLabel>
          <InputText name="zipCode" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <FormFieldInput>
          <FormFieldLabel htmlFor="houseNumber">{t("House number")}</FormFieldLabel>
          <InputNumber name="houseNumber" {...{ register, errors }} validation={{ required: true }} />
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
