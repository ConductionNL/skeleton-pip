import * as React from "react";
import "./MetaIconGridTemplate.css";
import { MetaIcon, MetaIconProps } from "../../../components/metaIcon/MetaIcon";
import { Divider } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface MetaIconGridTemplateProps {
  metaIcons: MetaIconProps[];
}

export const MetaIconGridTemplate: React.FC<MetaIconGridTemplateProps> = ({ metaIcons }) => {
  return (
    <div className="MetaIconGridTemplate">
      {metaIcons.map((metaIcon, idx) => {
        return (
          <div key={idx} className="MetaIconGridTemplate-metaIconBlock">
            <MetaIcon {...metaIcon} />

            <Divider
              orientation="vertical"
              className={clsx(metaIcons.length - 1 === idx && "MetaIconGridTemplate-divider--hidden")}
            />
          </div>
        );
      })}
    </div>
  );
};
