import * as React from "react";
import { FormFieldInput, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";
import { InputRadio } from "../../../components/formFields";

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
    if (!formData.weddingVenue) return;

    formData.weddingVenue.forEach((weddingVenue) => {
      setValue(weddingVenue, true);
    });
  }, [formData]);

  const onSubmit = (data: any): void => {
    handleSetFormData(data);
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    handleSetFormData(getValues());
    handleSetStep("weddingOfficiant");
  };

  const handleSetFormData = (data: any): void => {
    setFormData({ ...formData, weddingVenue: data.weddingVenueId });
  };

  return (
    <FormStepTemplate title={t("Select a wedding venue?")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {weddingVenue.map(({ label, weddingVenueId }) => (
          <FormFieldInput key={weddingVenueId}>
            <InputRadio
              label={label}
              name={weddingVenueId}
              {...{ register, errors }}
              validation={{ required: true }}
            ></InputRadio>
          </FormFieldInput>
        ))}

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
  { label: "Amsterdam Officiant: 2", weddingVenueId: "e293dff2-ae51-4606-86bd-36919c2e204f" },
  { label: "Utrecht : 3", weddingVenueId: "ef26907d-388b-430f-8e26-36a3c3c55fb9" },
];
