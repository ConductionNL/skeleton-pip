import * as React from "react";
import { Container } from "../../components/container/Container";
import { Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { HorizontalImageCard } from "../../components/card";
import { UserIcon } from "@gemeente-denhaag/icons";
import DigidImage from "../../assets/svgs/digid.svg";
import { useDigiD } from "../../hooks/useDigiD";
import { toggleNotificationModal, NotificationModal } from "@conduction/components";
import { useTranslation } from "react-i18next";

export const LandingTemplate: React.FC = () => {
  const { t } = useTranslation();

  const { isShown, show, hide } = toggleNotificationModal();

  const handleClick = () => {
    console.log("Cookies Accepted");
  };

  React.useEffect(() => {
    show();
  }, []);

  return (
    <Container>
      <div className={styles.container}>
        <div>
          <Heading3>{t("Log in to MijnDenHaag")}</Heading3>
          <Paragraph>
            {t(
              "In the personal online environment MijnDenHaag you can easily, quickly and safely arrange matters with the municipality. For example, residents can report a move or buy extra parking credit via DigiD. Companies can easily arrange business online via eHerkenning.",
            )}
          </Paragraph>
        </div>
        <div className={styles.loginCards}>
          <HorizontalImageCard
            iconOrImage={<img src={DigidImage} />}
            title={t("Login")}
            link={{
              href: useDigiD().getRedirectURL() ?? "",
              label: t("Login with DigiD"),
            }}
            external
          />
          <HorizontalImageCard
            iconOrImage={<UserIcon />}
            title={t("Login")}
            link={{
              href: "/login",
              label: t("Login with your account"),
            }}
          />
        </div>
        <NotificationModal
          {...{ hide, isShown }}
          title={t("Cookie preference")}
          description={t(
            "This website uses cookies. We use cookies to personalize content and to analyze traffic on our website.",
          )}
          primaryButton={{ label: t("Allow cookies"), handleClick: handleClick }}
          closeButton={{ label: t("Close") }}
          layoutClassName={styles.notification}
          infoLink={{
            label: t("More Information"),
            link: "https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/internet-telefoon-tv-en-post/cookies",
          }}
        />
      </div>
    </Container>
  );
};
