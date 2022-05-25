import * as React from "react";
import { Container } from "../../components/container/Container";
import { Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { t } from "i18next";
import { HorizontalImageCard } from "../../components/card/HorizontalImageCard/HorizontalImageCard";
import { UserIcon } from "@gemeente-denhaag/icons";
import DigidImage from "../../assets/svgs/digid.svg";
import { useDigiD } from "../../hooks/useDigiD";
import { ITopNavItem, PrimaryTopNav, SecondaryTopNav } from "../../components/topNav/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
            layoutClassName={styles.card}
            iconOrImage={<img src={DigidImage} />}
            title={t("Login")}
            link={{
              href: useDigiD().getRedirectURL(),
              label: t("Login with DigiD"),
            }}
            external
          />
          <HorizontalImageCard
            layoutClassName={styles.card}
            iconOrImage={<UserIcon />}
            title={t("Login")}
            link={{
              href: "/login",
              label: t("Login with your account"),
            }}
          />
        </div>
        <div className={styles.prim}>
          <PrimaryTopNav items={PrimaryTopNavItems} />
        </div>
        <div className={styles.sec}>
          <SecondaryTopNav items={SecondaryTopNavItems} />
        </div>
      </div>
    </Container>
  );
};

const PrimaryTopNavItems: ITopNavItem[] = [
  { label: "Home", href: "/" },
  { label: "API's", href: "/apis" },
  { label: "Events", href: "/events" },
  { label: "Code", href: "/code" },
  { label: "Over", href: "/over" },
];

const SecondaryTopNavItems: ITopNavItem[] = [
  { label: "Developer", href: "/developer" },
  { label: "Forum", href: "/forum" },
  { label: "Gitlab", href: "/gitlab", icon: <FontAwesomeIcon icon={faInfoCircle} /> },
];
