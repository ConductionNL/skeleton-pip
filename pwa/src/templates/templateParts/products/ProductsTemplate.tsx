import * as React from "react";
import * as styles from "./ProductsTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { IProductCardItem, ProductsCard } from "../../../components/productsCard/ProductsCard";
import { useProduct } from "../../../hooks/product";

export const ProductsTemplate: React.FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = React.useState<IProductCardItem[]>([]);

  const _useProducts = useProduct();
  const getProducts = _useProducts.getAll();

  React.useEffect(() => {
    if (!getProducts.isSuccess) return;
    const _products: IProductCardItem[] = getProducts.data.map((product) => ({
      title: product.title,
      date: product.date,
      id: product.id,
      content: product.content,
    }));

    setProducts(_products);
  }, [getProducts.isSuccess]);

  return (
    <div className={styles.container}>
      <div>
        <Heading1>{t("Products")}</Heading1>
        <ProductsCard products={products} />
      </div>
    </div>
  );
};
