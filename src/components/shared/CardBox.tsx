
import { Card } from "flowbite-react";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card p-[30px] shadow-md dark:shadow-none  ${className} `}
      style={{
        borderRadius: `12px`,
      }}
    >{children}</Card>
  );

};
export default CardBox;
