import * as React from "react";
import * as styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Button, Heading3, Paragraph } from "@gemeente-denhaag/components-react";

export interface ModalProps {
  title: string;
  description: string;
  labelCloseButton: string;
  labelOpenButton: string;
  infoLink?: string;
}

export const Modal: React.FC<ModalProps> = ({ description, infoLink, title, labelOpenButton, labelCloseButton }) => {
  const [isShown, setIsShown] = React.useState<boolean>(true);

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
              <Button variant="secondary-action" onClick={() => setIsShown(false)}>
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
