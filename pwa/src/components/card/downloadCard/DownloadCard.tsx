import * as React from "react";
import "./DownloadCard.css";
import { DownloadIcon } from "@gemeente-denhaag/icons";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface DownloadCardProps {
  icon: JSX.Element;
  label: string;
  sizeKb: string;
  layoutClassName?: string;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ icon, label, sizeKb, layoutClassName }) => (
  <div className={clsx("DownloadCard", [layoutClassName && layoutClassName])}>
    <div className="DownloadCard-iconAndLabel">
      <div className="DownloadCard-icon">{icon}</div>

      <div className="DownloadCard-label">
        {label} ({sizeKb}kb)
      </div>
    </div>

    <Link icon={<DownloadIcon />} iconAlign="start">
      Download
    </Link>
  </div>
);
