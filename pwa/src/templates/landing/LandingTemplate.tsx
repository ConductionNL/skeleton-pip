import * as React from "react";
import { Container, HorizontalImageCard } from "@conduction/components";
import { Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { UserIcon } from "@gemeente-denhaag/icons";
import DigidImage from "../../assets/svgs/digid.svg";
import { useDigiD } from "../../hooks/useDigiD";
import { useTranslation } from "react-i18next";
import { NotificationPopUp as _NotificationPopUp } from "@conduction/components";

export const LandingTemplate: React.FC = () => {
  const { t } = useTranslation();

  const NotificationPopUpController = _NotificationPopUp.controller;
  const NotificationPopUp = _NotificationPopUp.NotificationPopUp;

  const { isVisible, show, hide } = NotificationPopUpController();

  const handleClickPrimaryButton = () => {
    console.log("Cookies Accepted");
  };

  const handleClickSecondaryButton = () => {
    console.log("Close Button");
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
        <NotificationPopUp
          {...{ hide, isVisible }}
          title={t("Cookie preference")}
          description={
            <>
              {t(
                "This website uses cookies. We use cookies to personalize content and to analyze traffic on our website.",
              )}{" "}
              <a
                href="https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/internet-telefoon-tv-en-post/cookies"
                target={"_blank"}
              >
                {t("More Information")}
              </a>
            </>
          }
          primaryButton={{ label: t("Allow cookies"), handleClick: handleClickPrimaryButton }}
          secondaryButton={{ label: t("Close"), handleClick: handleClickSecondaryButton }}
          layoutClassName={styles.notification}
        />
      </div>
    </Container>
  );
};
