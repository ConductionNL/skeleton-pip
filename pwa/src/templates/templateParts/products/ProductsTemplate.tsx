import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../../hooks/products";
import Skeleton from "react-loading-skeleton";
import { useQueryClient } from "react-query";
import { DetailsCard } from "@conduction/components";
import { navigate } from "gatsby";

export const ProductsTemplate: React.FC = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const _useProducts = useProduct(queryClient);
  const getProducts = _useProducts.getAll();

  return (
    <div>
      <Heading1>{t("Products")}</Heading1>
      {getProducts.isLoading && <Skeleton height="100px" />}
      <>
        {!getProducts.isLoading && (
          <div>
            {getProducts.data?.map((product) => (
              <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                <DetailsCard
                  title={product.title}
                  introduction={""}
                  link={{ label: t("Read more") + "...", href: `/products/${product.id}` }}
                  subHeader={product.date}
                />
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};
