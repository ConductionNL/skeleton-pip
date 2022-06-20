import * as React from "react";
import { Container } from "../../components/container/Container";
import { Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { t } from "i18next";
import { HorizontalImageCard } from "../../components/card";
import { UserIcon } from "@gemeente-denhaag/icons";
import DigidImage from "../../assets/svgs/digid.svg";
import { useDigiD } from "../../hooks/useDigiD";
import { Paginations } from "../../components/denhaag-wrappers/paginations/Paginations";

export const LandingTemplate: React.FC = () => {
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
              href: useDigiD().getRedirectURL(),
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
          <Paginations pages={pages}/>
        </div>
      </div>
    </Container>
  );
};

const pages = [
  { href: "page=1", label: "1", ariaLabel: "1", current: location.pathname === "/page=1" },
  { href: "page=2", label: "2", ariaLabel: "2", current: location.pathname === "/page=2" },
  { href: "page=3", label: "3", ariaLabel: "3", current: location.pathname === "/page=3" },
  { href: "page=4", label: "4", ariaLabel: "4", current: location.pathname === "/page=4" },
  { href: "page=5", label: "5", ariaLabel: "5", current: location.pathname === "/page=5" },
  { href: "page=6", label: "6", ariaLabel: "6", current: location.pathname === "/page=6" },
  { href: "page=7", label: "7", ariaLabel: "7", current: location.pathname === "/page=7" },
  { href: "page=8", label: "8", ariaLabel: "8", current: location.pathname === "/page=8" },
  { href: "page=9", label: "9", ariaLabel: "9", current: location.pathname === "/" },
];



