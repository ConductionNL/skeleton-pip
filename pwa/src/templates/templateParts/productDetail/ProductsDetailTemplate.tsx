import * as React from "react";
import * as styles from "./ProductsDetailTemplate.module.css";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../../hooks/products";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";
import { Heading2, Paragraph } from "@gemeente-denhaag/components-react";

interface ProductsDetailTemplateProps {
  productId: string;
}

export const ProductsDetailTemplate: React.FC<ProductsDetailTemplateProps> = ({ productId }) => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const _useProduct = useProduct(queryClient);
  const getProduct = _useProduct.getOne(productId);

  React.useEffect(() => {
    if (!getProduct.isSuccess) return;
  }, [getProduct.isSuccess]);

  return (
    <div>
      {getProduct.isLoading && <Skeleton height="100px" />}
      <>
        {!getProduct.isLoading && (
          <div>
            <div>
              <div className={styles.title}>
                <Heading2>{getProduct.data.title}</Heading2>
              </div>

              <Paragraph>
                <div
                  dangerouslySetInnerHTML={{
                    __html: getProduct.data.content,
                  }}
                ></div>
              </Paragraph>
              <a className={styles.date}>Geplaatst op: {getProduct.data.date}</a>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
