import * as React from "react";
import { PageProps } from "gatsby";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { ProductDetailTemplate } from "../../../templates/templateParts/productDetail/ProductDetailTemplate";

const ProductDetailPage: React.FC<PageProps> = (props: PageProps) => {
  return (
    <DashboardTemplate>
      <ProductDetailTemplate productId={props.params.productId} />
    </DashboardTemplate>
  );
};

export default ProductDetailPage;
