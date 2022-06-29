// import * as React from "react";
// import { FormFieldInput, Link } from "@gemeente-denhaag/components-react";
// import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import { ArrowRightIcon } from "@gemeente-denhaag/icons";
// import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
// import { MarriageServiceContext } from "../MarriageServiceContext";
// import { TMarriageFormServiceSteps } from "../MarriageServiceForm";
// import {InputCheckbox} from "@conduction/components";
//
// interface MarriageStepProps {
//   setNextStep: () => void;
//   handleSetStep: React.Dispatch<React.SetStateAction<TMarriageFormServiceSteps>>;
// }
//
// interface IAdditionalProducts {
//   label: string;
//   ProductsId: string;
// }
//
// export const AdditionalProductsStep: React.FC<MarriageStepProps> = ({ setNextStep, handleSetStep }) => {
//   const [additionalProducts] = React.useState<IAdditionalProducts[]>(testAdditionalProducts);
//   const [formData, setFormData] = React.useContext(MarriageServiceContext);
//   const { t } = useTranslation();
//
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();
//
//   React.useEffect(() => {
//     if (!formData.additionalProducts) return;
//
//     formData.additionalProducts.forEach((additionalProducts) => {
//       setValue(additionalProducts, true);
//     });
//   }, [formData]);
//
//   const onSubmit = (data: any): void => {
//     handleSetFormData(data);
//     setNextStep();
//   };
//
//   const handleSetPreviousStep = () => {
//     handleSetFormData(getValues());
//     handleSetStep("date");
//   };
//
//   const handleSetFormData = (data: any): void => {
//     const selectedproducts: string = "";
//     console.log({ data });
//     for (const [key, value] of Object.entries(data)) {
//       value && selectedproducts.push(key);
//     }
//     setFormData({ ...formData, additionalProducts: data.ProductsId});
//   };
//
//   return (
//     <FormStepTemplate title={t("Select a wedding officiant?")} setPreviousStep={handleSetPreviousStep}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {additionalProducts.map(({ label, AdditionalProductsId }) => (
//           <FormFieldInput key={AdditionalProductsId}>
//             <InputCheckbox
//               label={label}
//               name={AdditionalProductsId}
//               {...{ register, errors }}
//               validation={{ required: true }}
//             ></InputCheckbox>
//           </FormFieldInput>
//         ))}
//         <button type="submit">
//           <Link icon={<ArrowRightIcon />} iconAlign="start">
//             {t("Next step")}
//           </Link>
//         </button>
//       </form>
//     </FormStepTemplate>
//   );
// };
//
// const testAdditionalProducts: IAdditionalProducts[] = [
//   { label: "Book read", AdditionalProductsId: "df24af62-8aaf-4057-8ede-c12045e0cc74" },
//   { label: "Book blue", AdditionalProductsId: "e293dff2-ae51-4606-86bd-36919c2e204f" },
// ];
