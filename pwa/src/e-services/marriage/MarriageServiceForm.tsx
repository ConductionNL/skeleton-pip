import * as React from "react";
import { IMarriageServiceData, marriageServiceData, MarriageServiceProvider } from "./MarriageServiceContext";
import { SelectServiceFormStep, DateFormStep, CoMoversStep, ConfirmFormStep } from "./steps";

export type TMarriageFormServiceSteps = "selectService" | "date" | "coMovers" | "confirm";

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
      return <DateFormStep setNextStep={() => setStep("coMovers")} handleSetStep={setStep} />;

    case "coMovers":
      return <CoMoversStep setNextStep={() => setStep("confirm")} handleSetStep={setStep} />;

    case "confirm":
      return <ConfirmFormStep setPreviousStep={() => setStep("coMovers")} />;
  }
};
