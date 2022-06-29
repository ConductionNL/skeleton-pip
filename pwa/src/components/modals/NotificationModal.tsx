import * as React from "react";
import * as styles from "./NotificationModal.module.css";
import ReactDOM from "react-dom";
import { Button, Heading3, Paragraph } from "@gemeente-denhaag/components-react";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  title: string;
  description: string;
  labelCloseButton: string;
  labelOpenButton: string;
  infoLink?: string;
}

export const NotificationModal: React.FC<ModalProps> = ({
  description,
  infoLink,
  title,
  labelOpenButton,
  labelCloseButton,
  hide,
  isShown,
}) => {
  const modal = (
    <div>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.content}>
            <Heading3>{title}</Heading3>
            <div>
              <Paragraph>
                {description}
                {infoLink ? <a href={infoLink}>Meer infomatie</a> : <></>}
              </Paragraph>
            </div>
            <div className={styles.button}>
              <Button variant="secondary-action" onClick={hide}>
                {labelCloseButton}
              </Button>
              <Button>{labelOpenButton}</Button>
            </div>
          </div>
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
