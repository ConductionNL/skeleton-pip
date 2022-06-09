import * as React from "react";
import { IMarriageServiceData, marriageServiceData, MarriageServiceProvider } from "./MarriageServiceContext";
import { SelectServiceFormStep, DateFormStep, WeddingOfficiantStep, WeddingVenueStep } from "./steps";

export type TMarriageFormServiceSteps = "selectService" | "date" | "weddingOfficiant" | "weddingVenue" | "partner";

export const MarriageServiceForm: React.FC = () => {
  const [step, setStep] = React.useState<TMarriageFormServiceSteps>("selectService");
  const [formData, setFormData] = React.useState<IMarriageServiceData>(marriageServiceData);

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
      return <WeddingVenueStep setNextStep={() => setStep("partner")} handleSetStep={setStep} />;
  }
};
