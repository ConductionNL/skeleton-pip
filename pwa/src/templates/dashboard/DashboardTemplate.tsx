import * as React from "react";
import { PrivateRoute } from "../../components/privateRoute/privateRoute";

export const DashboardTemplate: React.FC = () => {
  return (
    <PrivateRoute>
      <div className="DashboardTemplate">Dashboard Template</div>
    </PrivateRoute>
  );
};
