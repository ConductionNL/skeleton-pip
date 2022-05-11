import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { ProductsTemplate } from "../templates/templateParts/products/ProductsTemplate";

const ProductsPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <ProductsTemplate/>
    </DashboardTemplate>
  );
};

export default ProductsPage;
