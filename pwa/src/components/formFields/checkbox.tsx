import { Checkbox, FormControlLabel } from "@gemeente-denhaag/components-react";
import { Controller } from "react-hook-form";
import { IControlledInput, ICheckboxProps, IReactHookFormProps } from "./types";

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps & IControlledInput> = ({
  disabled,
  name,
  defaultChecked,
  validation,
  control,
  label,
}) => {
  return (
    // <FormControlLabel
    //   input={
    //     <Controller
    //       name={"checkwithlabel"}
    //       control={control}
    //       defaultValue={false}
    //       render={({field: {onChange, value}}) => (
    //         <Checkbox {...props} checked={props.value} onChange={(e) => props.onChange(e.target.checked)} />
    //       )}
    //     />
    //   }
    //   label={"Checkbox with label"}
    // />
    <FormControlLabel
      input={
        <Controller
          {...{ control, name }}
          rules={validation}
          render={({ field: { onChange, value } }) => {
            console.log("there's a chagne" + value);

            return <Checkbox {...{ onChange, disabled }} checked={true} />;
          }}
        />
      }
      {...{ label }}
    />
  );
};
