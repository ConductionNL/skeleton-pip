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

interface IAdditionalProducts {
  label: string;
  ProductsId: string;
}

export const AdditionalProductsStep: React.FC<MarriageStepProps> = ({ setNextStep, handleSetStep }) => {
  const [additionalProducts] = React.useState<IAdditionalProducts[]>(testAdditionalProducts);
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
    if (!formData.additionalProducts) return;

    formData.additionalProducts.forEach((additionalProducts) => {
      setValue(additionalProducts, true);
    });
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, additionalProducts: data.additionalProducts });
    setNextStep();
  };

  const handleSetPreviousStep = () => {
    setFormData({ ...formData, additionalProducts: getValues("additionalProducts") });
    handleSetStep("witnesses");
  };

  return (
    <FormStepTemplate title={t("Select a additional products?")} setPreviousStep={handleSetPreviousStep}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          {additionalProducts.map(({ label, ProductsId }) => (
            <InputRadio
              key={ProductsId}
              name={ProductsId}
              label={label}
              {...{ register, errors }}
              value={label}
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

const testAdditionalProducts: IAdditionalProducts[] = [
  { label: "Book read", ProductsId: "df24af62-8aaf-4057" },
  { label: "Book blue", ProductsId: "e293dff2-ae51-4606" },
];
