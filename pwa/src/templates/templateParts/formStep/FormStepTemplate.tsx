import { Link } from "@gemeente-denhaag/components-react";
import * as React from "react";
import * as styles from "./FormStepTemplate.module.css";
import { ArrowLeftIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

interface FormStepTemplateProps {
  setPreviousStep?: () => void;
}

export const FormStepTemplate: React.FC<FormStepTemplateProps> = ({ children, setPreviousStep }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div>nav-ballen hier</div>

      <div className={styles.formContainer}>
        {children}

        <div className={styles.previousStep} onClick={setPreviousStep}>
          <Link icon={<ArrowLeftIcon />} iconAlign="start" disabled={setPreviousStep ? false : true}>
            {t("Previous step")}
          </Link>
        </div>
      </div>
    </div>
  );
};
