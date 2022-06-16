import * as React from "react";
import * as styles from "./NotificationTemplate.module.css";

import APIContext from "../../../apiService/apiContext";
import APIService from "../../../apiService/apiService";
import { NotificationModal } from "../../../components/modals/NotificationModal";

export const NotificationTemplate: React.FC = () => {
  const API: APIService = React.useContext(APIContext);
  const [notifications, setNotifications] = React.useState<any>([]);
  const [currentNotification, setCurrentNotification] = React.useState<any>(null);

  React.useEffect(() => {
    const interval = setInterval(
      () =>
        API.Notification.getAll().then((res) => {
          res.length !== notifications.length && setNotifications(res);
        }),
      10000,
    );

    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    if (!notifications.length) return;

    const { title, description } = getContentFromType(notifications[0].type);

    setCurrentNotification({
      title: title,
      description: description,
    });
  }, [notifications]);

  if (!currentNotification) return <></>;

  return (
    <NotificationModal
      isShown
      hide={() => {
        console.log("close");
      }}
      labelCloseButton="Close"
      labelOpenButton="Open"
      title={currentNotification.title}
      description={currentNotification.description}
    />
  );
};

const getContentFromType = (type: string) => {
  let title = "";
  let description = "";

  switch (type) {
    case "nl.vng.zaken.gesloten":
      title = "Zaak gesloten";
      description = "Deze zaak is gesloten, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.zaken.aangemaakt":
      title = "Zaak aangemaakt";
      description = "Deze zaak is aangemaakt, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.zaken.gewijzigd":
      title = "Zaak gewijzigd";
      description = "Deze zaak is gewijzigd, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.zaken.status_gewijzigd":
      title = "Zaak status gewijzigd";
      description = "De status van deze zaak is gewijzigd, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.klanten.contactmoment_aangemaakt":
      title = "Zaak contactmoment aangemaakt";
      description = "Deze zaak heeft een nieuw bericht ontvangen, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.klanten.contactmoment_gewijzigd":
      title = "Zaak contactmoment gewijzigd";
      description = "Deze zaak heeft een geüpdatet contactmoment, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.klanten.contactmoment_statuswijziging":
      title = "Zaak contactmoment status gewijzigd";
      description = "Deze zaak heeft een gewijzigd contactmoment status, klik hieronder voor meer informatie.";
      break;
    case "nl.vng.publicaties.publicatie_aangemaakt":
      title = "Zaak publicatie aangemaakt";
      description = "Deze zaak heeft een nieuwe publicatie, klik hieronder voor meer informatie.";
      break;
  }

  return { title, description };
};
