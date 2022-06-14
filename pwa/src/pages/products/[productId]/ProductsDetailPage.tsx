import * as React from "react";
import { PageProps } from "gatsby";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { ProductsDetailTemplate } from "../../../templates/templateParts/productDetail/ProductsDetailTemplate";

const CurrentCasesPage: React.FC<PageProps> = (props: PageProps) => {
  return (
    <DashboardTemplate>
      <ProductsDetailTemplate productId={props.params.productId} />
    </DashboardTemplate>
  );
};

export default CurrentCasesPage;
