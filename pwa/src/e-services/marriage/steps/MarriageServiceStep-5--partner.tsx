import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";
import { InputEmail, InputNumber, InputText } from "@conduction/components";

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
    setValue("phoneNumber", formData.partner.phoneNumber);
    setValue("email", formData.partner.email);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({
      ...formData,
      partner: { firstName: data.firstName, lastName: data.lastName, phoneNumber: data.phoneNumber, email: data.email },
    });
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    setFormData({
      ...formData,
      partner: {
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        phoneNumber: getValues("phoneNumber"),
        email: getValues("email"),
      },
    });
    handleSetStep("weddingVenue");
  };

  return (
    <FormStepTemplate title={t("Add your partner.")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="firstName">{t("First name")}</FormFieldLabel>
          <InputText name="firstName" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <FormFieldInput>
          <FormFieldLabel htmlFor="lastName">{t("Last name")}</FormFieldLabel>
          <InputText name="lastName" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <FormFieldInput>
          <FormFieldLabel htmlFor="phoneNumber">{t("Phone number")}</FormFieldLabel>
          <InputNumber name="phoneNumber" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <FormFieldInput>
          <FormFieldLabel htmlFor="email">{t("Email address")}</FormFieldLabel>
          <InputEmail name="email" {...{ register, errors }} validation={{ required: true }} />
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