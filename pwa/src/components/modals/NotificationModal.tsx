import * as React from "react";
import * as styles from "./NotificationModal.module.css";
import ReactDOM from "react-dom";
import { Button, Heading3, Link, Paragraph } from "@gemeente-denhaag/components-react";
import clsx from "clsx";
import { CloseIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

export interface ModalProps {
  title: string;
  description: string;
  infoLink?: string;
  labelSecondaryButton: string;
  PrimaryButton: {
    label: string;
    handleClick(): any;
  };
  layoutClassName?: string;
  isShown: boolean;
  hide: () => void;
}

export const NotificationModal: React.FC<ModalProps> = ({
  title,
  description,
  infoLink,
  PrimaryButton,
  labelSecondaryButton,
  layoutClassName,
  isShown,
  hide,
}) => {
  const { t } = useTranslation();

  const modal = (
    <div
      className={clsx(
        styles.container,
        layoutClassName ? [layoutClassName && layoutClassName] : styles.defaultContainer,
      )}
    >
      <div className={styles.modal}>
        <Heading3>{title}</Heading3>
        <div>
          <Paragraph>
            {description} {infoLink ? <Link href={infoLink}>{t("More Information")}</Link> : <></>}
          </Paragraph>
        </div>
        <div className={styles.buttons}>
          <div onClick={hide}>
            <Link icon={<CloseIcon />} iconAlign="start">
              {labelSecondaryButton}
            </Link>
          </div>
          <Button icon={<ArrowRightIcon />} onClick={PrimaryButton.handleClick}>
            {PrimaryButton.label}
          </Button>
        </div>
      </div>
    </div>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export const toggleNotificationModal = () => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
