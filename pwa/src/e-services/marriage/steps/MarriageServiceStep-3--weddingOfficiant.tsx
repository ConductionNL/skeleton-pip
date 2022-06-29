import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";
import {InputCheckbox} from "@conduction/components";
import {InputRadio} from "../../../../../../conduction-components.git/lib/components/formFields";

interface MarriageStepProps {
  setNextStep: () => void;
  handleSetStep: React.Dispatch<React.SetStateAction<TMarriageFormServiceSteps>>;
}

interface IWeddingOfficiant {
  label: string;
  weddingOfficiantId: string;
}

export const WeddingOfficiantStep: React.FC<MarriageStepProps> = ({ setNextStep, handleSetStep }) => {
  const [weddingOfficiants] = React.useState<IWeddingOfficiant[]>(testWeddingOfficiants);
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
    if (!formData.weddingOfficiant) return;

    formData.weddingOfficiant.forEach((weddingOfficiant) => {
      setValue(weddingOfficiant, true);
    });
  }, [formData]);

  const onSubmit = (data: any): void => {
    handleSetFormData(data);
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    handleSetFormData(getValues());
    handleSetStep("date");
  };

  const handleSetFormData = (data: any): void => {
    const selectedWeddingOfficiant: string = "";
    console.log({ data });
    // for (const [key, value] of Object.entries(data)) {
    //   value && selectedWeddingOfficiant.push(key);
    // }
    // setFormData({ ...formData, weddingOfficiant: selectedWeddingOfficiant });
  };

  return (
    <FormStepTemplate title={t("Select a wedding officiant?")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {testWeddingOfficiants.map(({ label, weddingOfficiantId }) => (
          <FormFieldInput key={weddingOfficiantId}>
            <InputRadio
              label={label}
              name={weddingOfficiantId}
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

const testWeddingOfficiants: IWeddingOfficiant[] = [
  { label: "Wedding Officiant: 1", weddingOfficiantId: "df24af62-8aaf-4057-8ede-c12045e0cc74" },
  { label: "Wedding Officiant: 2", weddingOfficiantId: "e293dff2-ae51-4606-86bd-36919c2e204f" },
  { label: "Wedding Officiant: 3", weddingOfficiantId: "ef26907d-388b-430f-8e26-36a3c3c55fb9" },
];
