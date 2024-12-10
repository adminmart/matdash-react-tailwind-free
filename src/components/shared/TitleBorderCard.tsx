
import { Card } from "flowbite-react";
import React from "react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
}) => {


  return (
    <Card
      className={`card dark:shadow-dark-md shadow-md p-0 ${className} `}
      style={{
        borderRadius: `12px`,
      }}
    >
      <div className="flex justify-between items-center border-b border-ld px-6 py-4">
        <h5 className="text-xl font-semibold">{title}</h5>
      </div>
      <div className="pt-4 p-6">{children}</div>
    </Card>
  );
};

export default TitleCard;
