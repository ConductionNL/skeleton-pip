import * as React from "react";
import * as styles from "./ProductsCard.module.css";
import { Heading2, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";

export interface IProductCardItem {
  id: string;
  content: string;
  title: string;
  date: Date;
}

interface ProductCardProps {
  products: IProductCardItem[];
}
export const ProductsCard: React.FC<ProductCardProps> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div>
      {products.map((_products) => (
        <div className={styles.title}>
          <Heading2>{_products.title}</Heading2>
          <Paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: _products.content,
              }}
            ></div>
          </Paragraph>
          <a className={styles.date}>Geplaatst op: {_products.date}</a>
        </div>
      ))}
    </div>
  );
};
