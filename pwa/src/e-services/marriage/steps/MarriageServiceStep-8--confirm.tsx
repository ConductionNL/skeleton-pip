// import * as React from "react";
// import { useTranslation } from "react-i18next";
// import { MarriageServiceContext } from "../MarriageServiceContext";
// import {
//   EndServiceTemplate,
//   ICollectedData,
// } from "../../../templates/templateParts/selfServices/endService/EndServiceTemplate";
// import { navigate } from "gatsby";
//
// interface MovingStepProps {
//   setPreviousStep: () => void;
// }
//
// export const ConfirmFormStep: React.FC<MovingStepProps> = ({ setPreviousStep }) => {
//   const { t } = useTranslation();
//   const [formData] = React.useContext(MarriageServiceContext);
//
//   const onSubmit = (): void => {
//     // Todo: send data to gateway
//     navigate("/my-cases");
//   };
//
//   const getCollectedData = (): ICollectedData[] => {
//     const collectedData: ICollectedData[] = [
//       { label: t("Zip code"), value: formData.selectService },
//       { label: t("date"), value: formData.date },
//       { label: t("House number"), value: formData.houseNumber },
//       {
//         label: t("Who will move with you?"),
//         value: formData.additionalProducts.join(", "),
//       },
//     ];
//
//     return collectedData;
//   };
//
//   return (
//     <EndServiceTemplate
//       collectedData={getCollectedData()}
//       title={t("Confirm your move")}
//       handleSubmit={onSubmit}
//       {...{ setPreviousStep }}
//     />
//   );
// };
