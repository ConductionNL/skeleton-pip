import * as React from "react";
import { FormFieldInput, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";
import { InputRadio } from "@conduction/components";

interface MarriageStepProps {
  setNextStep: () => void;
  handleSetStep: React.Dispatch<React.SetStateAction<TMarriageFormServiceSteps>>;
}

interface IWeddingVenue {
  label: string;
  weddingVenueId: string;
}

export const WeddingVenueStep: React.FC<MarriageStepProps> = ({ setNextStep, handleSetStep }) => {
  const [weddingVenue] = React.useState<IWeddingVenue[]>(testWeddingVenue);
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
    setValue("weddingVenue", formData.weddingVenue);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, weddingVenue: data.weddingVenue });
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    setFormData({ ...formData, weddingVenue: getValues("weddingVenue") });
    handleSetStep("weddingOfficiant");
  };

  return (
    <FormStepTemplate title={t("Select a wedding venue?")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          {weddingVenue.map(({ label }) => (
            <InputRadio
              label={label}
              value={label}
              name="weddingVenue"
              {...{ register, errors }}
              validation={{ required: true }}
            />
          ))}
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

const testWeddingVenue: IWeddingVenue[] = [
  { label: "Rotterdam: 1", weddingVenueId: "df24af62-8aaf-4057-8ede-c12045e0cc74" },
  { label: "Amsterdam: 2", weddingVenueId: "e293dff2-ae51-4606-86bd-36919c2e204f" },
  { label: "Utrecht: 3", weddingVenueId: "ef26907d-388b-430f-8e26-36a3c3c55fb9" },
];
