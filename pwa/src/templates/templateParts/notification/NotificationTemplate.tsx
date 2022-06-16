import * as React from "react";
import * as styles from "./NotificationTemplate.module.css";

import APIContext from "../../../apiService/apiContext";
import APIService from "../../../apiService/apiService";
import { NotificationModal, toggleNotificationModal } from "../../../components/modals/NotificationModal";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const NotificationTemplate: React.FC = () => {
  const API: APIService = React.useContext(APIContext);
  const [notifications, setNotifications] = React.useState<any>([]);
  const [currentNotification, setCurrentNotification] = React.useState<any>(null);
  const { toggle, isShown } = toggleNotificationModal();
  const { t } = useTranslation();

  React.useEffect(() => {
    const interval = setInterval(
      () =>
        API.Notification.getAll().then((res) => {
          res.length !== notifications.length && setNotifications(res);
        }),
      5000,
    );

    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    if (!notifications.length) return;

    toggle();

    const { title, description } = getContentFromType(notifications[0].type, t);

    setCurrentNotification({
      title: title,
      description: description,
    });
  }, [notifications]);

  if (!currentNotification) return <></>;

  return (
    <NotificationModal
      isShown={isShown}
      hide={toggle}
      primaryButton={{
        label: t("View case"),
        handleClick: () => {
          navigate("/my-cases");
          toggle();
        },
      }}
      title={currentNotification.title}
      description={currentNotification.description}
      layoutClassName={styles.notification}
    />
  );
};

const getContentFromType = (type: string, t: any) => {
  let title = "";
  let description = "";

  switch (type) {
    case "nl.vng.zaken.zaak_gesloten":
      title = t("Case closed");
      description = t("This case is closed, click below for more information");
      break;
    case "nl.vng.zaken.aangemaakt":
      title = t("Case created");
      description = t("This case is created, click below for more information");
      break;
    case "nl.vng.zaken.gewijzigd":
      title = t("Case modified");
      description = t("This case is modified, click below for more information");
      break;
    case "nl.vng.zaken.status_gewijzigd":
      title = t("Case status modified");
      description = t("The status of this case is modified, click below for more information");
      break;
    case "nl.vng.klanten.contactmoment_aangemaakt":
      title = t("Case contact moment created");
      description = t("This case received a new message, click below for more information");
      break;
    case "nl.vng.klanten.contactmoment_gewijzigd":
      title = t("This case's contact moment modified");
      description = t("This case has a modified contact moment, click below for more information");
      break;
    case "nl.vng.klanten.contactmoment_statuswijziging":
      title = t("Case's contact moment status modified");
      description = t("This case has a modified contact moment status, click below for more information");
      break;
    case "nl.vng.publicaties.publicatie_aangemaakt":
      title = t("Case publication created");
      description = t("This case received a new publication, click below for more information");
      break;
  }

  return { title, description };
};
