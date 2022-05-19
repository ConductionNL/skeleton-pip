import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useBag } from "../../../hooks/bag";
import Skeleton from "react-loading-skeleton";
import { BagTable } from "../../../components/bagTable/BagTable";

export const BagTemplate: React.FC = () => {
  const { t } = useTranslation();
  const [Adres, setAdres] = React.useState<any[]>([]);
  const [AdressenU, setAdressenU] = React.useState<any[]>([]);

  const _useBag = useBag();
  const getAdressenuitgebreid = _useBag.getAdressenuitgebreid();
  const getAdres = _useBag.getAdressen();
  React.useEffect(() => {
    if (!getAdres.isSuccess) return;

    setAdres(getAdres.data);
    console.log(getAdres.data);
  }, [getAdres.isSuccess]);

  React.useEffect(() => {
    if (!getAdressenuitgebreid.isSuccess) return;

    setAdressenU(getAdressenuitgebreid.data);
  }, [getAdressenuitgebreid.isSuccess]);
  return (
    <div>
      <div>
        <Heading1>{t("Adres")}</Heading1>
        {getAdres.isLoading && <Skeleton height="100px" />}
        <>{!getAdres.isLoading && <BagTable Bag={Adres} />}</>
      </div>
      <div>
        <Heading1>{t("AdresUitgebreid")}</Heading1>
        {getAdressenuitgebreid.isLoading && <Skeleton height="100px" />}
        <>{!getAdressenuitgebreid.isLoading && <BagTable Bag={AdressenU} />}</>
      </div>
    </div>
  );
};
