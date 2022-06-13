import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { IProductCardItem, ProductsCard } from "../../../components/productsCard/ProductsCard";
import { useProduct } from "../../../hooks/products";
import Skeleton from "react-loading-skeleton";

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
    <div>
      <div>
        <Heading1>{t("Products")}</Heading1>
        {getProducts.isLoading && <Skeleton height="100px" />}
        <>{!getProducts.isLoading && <ProductsCard products={products} />}</>
      </div>
    </div>
  );
};
