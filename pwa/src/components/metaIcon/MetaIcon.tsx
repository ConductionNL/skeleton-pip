import * as React from "react";
import "./MetaIcon.css";

export interface MetaIconProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const MetaIcon: React.FC<MetaIconProps> = ({ icon, label, value }) => (
  <div className="MetaIcon">
    <span className="MetaIcon-icon">{icon}</span>

    <span className="MetaIcon-label">{label}</span>

    <span className="MetaIcon-value">{value}</span>
  </div>
);
