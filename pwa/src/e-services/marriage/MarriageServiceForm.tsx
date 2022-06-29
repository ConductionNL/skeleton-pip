import * as React from "react";
import { IMarriageServiceData, marriageServiceData, MarriageServiceProvider } from "./MarriageServiceContext";
import {
  SelectServiceFormStep,
  DateFormStep,
  WeddingOfficiantStep,
  WeddingVenueStep,
  PartnerStep,
  WitnessesStep,
  AdditionalProductsStep,
  ConfirmFormStep,
}
from "./steps";


export type TMarriageFormServiceSteps = "selectService" | "date" | "weddingOfficiant" | "weddingVenue" | "partner" | "witnesses" | "additionalProducts"|"confirm";

export const MarriageServiceForm: React.FC = () => {
  const [step, setStep] = React.useState<TMarriageFormServiceSteps>("selectService");
  const [formData, setFormData] = React.useState<IMarriageServiceData>(marriageServiceData);

  console.log(setStep)
  return (
    <MarriageServiceProvider value={[formData, setFormData]}>
      <MarriageServiceFormStep {...{ step, setStep }} />
    </MarriageServiceProvider>
  );
};

interface MarriageServiceFormStepProps {
  step: TMarriageFormServiceSteps;
  setStep: React.Dispatch<React.SetStateAction<TMarriageFormServiceSteps>>;
}

const MarriageServiceFormStep: React.FC<MarriageServiceFormStepProps> = ({ step, setStep }) => {
  switch (step) {
    case "selectService":
      return <SelectServiceFormStep setNextStep={() => setStep("date")} />;

    case "date":
      return <DateFormStep setNextStep={() => setStep("weddingOfficiant")} handleSetStep={setStep} />;

    case "weddingOfficiant":
      return <WeddingOfficiantStep setNextStep={() => setStep("weddingVenue")} handleSetStep={setStep} />;

    case "weddingVenue":
      return <WeddingVenueStep setNextStep={() => setStep("partner")} handleSetStep={setStep} />;

    case "partner":
      return <PartnerStep setNextStep={() => setStep("witnesses")} handleSetStep={setStep} />;

    case "witnesses":
      return <WitnessesStep setNextStep={() => setStep("additionalProducts")} handleSetStep={setStep} />;

    case "additionalProducts":
      return <AdditionalProductsStep setNextStep={() => setStep("confirm")} handleSetStep={setStep} />;

    case "confirm":
      return <ConfirmFormStep handleSetStep={setStep} />;
  }
};
