import { FormFieldInput, FormFieldLabel, Link, FormControlLabel } from "@gemeente-denhaag/components-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { InputCheckbox } from "../../../components/formFields/checkbox";
import { MovingServiceContext } from "../MovingServiceContext";

interface MovingStepProps {
  setNextStep: () => void;
  setPreviousStep: () => void;
}

interface ICoMover {
  label: string;
  uuid: string;
  selected?: boolean;
}

export const CoMoversStep: React.FC<MovingStepProps> = ({ setNextStep, setPreviousStep }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useContext(MovingServiceContext);
  const [coMovers, setCoMovers] = React.useState([{ name: "name1" }, { name: "name2" }]);
  const [checked, setChekced] = React.useState<boolean>(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("name1", true);
  }, [checked]);

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <FormStepTemplate {...{ setPreviousStep }}>
      <button onClick={() => setChekced(!checked)}>toggle</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {coMovers.map((coMover) => (
          <InputCheckbox name={coMover.name} label={coMover.name} {...{ register, errors, control }} />
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
