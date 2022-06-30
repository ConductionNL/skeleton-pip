import * as React from "react";
import * as styles from "./ProductDetailTemplate.module.css";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../../hooks/product";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";
import { Divider, Heading1, Paragraph } from "@gemeente-denhaag/components-react";
import { translateDate } from "../../../services/dateFormat";

interface ProductDetailTemplateProps {
  productId: string;
}

export const ProductDetailTemplate: React.FC<ProductDetailTemplateProps> = ({ productId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const _useProduct = useProduct(queryClient);
  const getProduct = _useProduct.getOne(productId);

  React.useEffect(() => {
    if (!getProduct.isSuccess) return;
  }, [getProduct.isSuccess]);

  return (
    <div>
      {!getProduct.isLoading && (
        <div className={styles.content}>
          <Heading1>{getProduct.data.title}</Heading1>

          <Paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: getProduct.data.content,
              }}
            ></div>
          </Paragraph>

          <Divider />

          <span className={styles.date}>
            {t("Posted")}: {translateDate(i18n.language, getProduct.data.date)}
          </span>
        </div>
      )}

      {getProduct.isLoading && <Skeleton height="100px" />}
    </div>
  );
};
