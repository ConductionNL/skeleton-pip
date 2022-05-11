import * as React from "react";
import * as styles from "./LoginTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { IProductTableItem, ProductsTable } from "../../../components/productsTable/ProductsTable";
import { useQueryClient } from "react-query";
import { useProduct } from "../../../hooks/product";

export const ProductsTemplate: React.FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = React.useState<IProductTableItem[]>([]);

  const _useProducts = useProduct();
  const getProducts = _useProducts.getAll();
  console.log(getProducts);

  React.useEffect(() => {
    if (!getProducts.isSuccess) return;
    console.log(getProducts.data);
    const _products: IProductTableItem[] = getProducts.data.map((product) => ({
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
        <ProductsTable products={products} />
      </div>
    </div>
  );
};
