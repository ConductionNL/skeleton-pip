import * as React from "react";
import * as styles from "./ProductsTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../../hooks/product";
import Skeleton from "react-loading-skeleton";
import { useQueryClient } from "react-query";
import { DetailsCard } from "@conduction/components";
import { navigate } from "gatsby";
import { translateDate } from "../../../services/dateFormat";

export const ProductsTemplate: React.FC = () => {
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const _useProducts = useProduct(queryClient);
  const getProducts = _useProducts.getAll();

  return (
    <div className={styles.content}>
      <Heading1 className={styles.heading}>{t("Products")}</Heading1>

      {!getProducts.isLoading && (
        <div>
          {getProducts.data?.map((product) => (
            <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
              <DetailsCard
                title={product.title}
                introduction={""}
                link={{ label: t("Read more"), href: `/products/${product.id}` }}
                subHeader={translateDate(i18n.language, product.date)}
              />
            </div>
          ))}
        </div>
      )}

      {getProducts.isLoading && <Skeleton height="100px" />}
    </div>
  );
};
