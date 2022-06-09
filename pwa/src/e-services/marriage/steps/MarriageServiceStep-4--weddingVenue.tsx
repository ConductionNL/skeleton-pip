import * as React from "react";
import { Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MarriageServiceContext } from "../MarriageServiceContext";
import { TMarriageFormServiceSteps } from "../MarriageServiceForm";

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
    const selectedWeddingVenue: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      value && selectedWeddingVenue.push(key);
    }
    setFormData({ ...formData, weddingVenue: selectedWeddingVenue });
  };

  return (
    <FormStepTemplate title={t("Select a wedding venue?")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset aria-describedby="description" className="denhaag-form-field" role="radiogroup">
          <legend className="denhaag-form-field__label">{t("Wedding venue")}</legend>
          <div className="denhaag-form-field__input">
            {weddingVenue.map(({ weddingVenueId, label }) => (
              <label className="denhaag-form-control-label">
                <span className="denhaag-form-control-label__input">
                  <span className="denhaag-radio">
                    <input
                      className="denhaag-radio__input"
                      {...{ register, errors, label }}
                      id={weddingVenueId}
                      name="radio"
                      type="radio"
                      value={label}
                    />
                    <span className="denhaag-radio__icon">
                      <span className="denhaag-radio__icon-inner" />
                    </span>
                  </span>
                </span>
                <span className="denhaag-form-control-label__label">{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

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
