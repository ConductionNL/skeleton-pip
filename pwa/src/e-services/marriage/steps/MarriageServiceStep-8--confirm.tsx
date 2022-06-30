import * as React from "react";
import { useTranslation } from "react-i18next";
import { MarriageServiceContext } from "../MarriageServiceContext";
import {
  EndServiceTemplate,
  ICollectedData,
} from "../../../templates/templateParts/selfServices/endService/EndServiceTemplate";
import { navigate } from "gatsby";

interface MarriageStepProps {
  setPreviousStep: () => void;
}

export const ConfirmFormStep: React.FC<MarriageStepProps> = ({ setPreviousStep }) => {
  const { t } = useTranslation();
  const [formData] = React.useContext(MarriageServiceContext);

  const onSubmit = (): void => {
    // Todo: send data to gateway
    navigate("/my-cases");
  };

  const getCollectedData = (): ICollectedData[] => {
    const collectedData: ICollectedData[] = [
      { label: t("Select service"), value: formData.selectService },
      { label: t("Wedding date"), value: formData.date },
      { label: t("Wedding OfficiantId"), value: formData.weddingOfficiant.join(", ") },
      {
        label: t("Wedding venue"),
        value: formData.weddingVenue.join(", "),
      },
      // {
      //   label: t("Partner"),
      //   value: formData.partner,
      // },
    // {
    //   label: t("Wedding venue"),
    //     value: formData.witnesses,
    // },
      {
        label: t("Additional products"),
        value: formData.additionalProducts.join(", "),
      },
    ];

    return collectedData;
  };

  return (
    <EndServiceTemplate
      collectedData={getCollectedData()}
      title={t("Confirm your move")}
      handleSubmit={onSubmit}
      {...{ setPreviousStep }}
    />
  );
};
