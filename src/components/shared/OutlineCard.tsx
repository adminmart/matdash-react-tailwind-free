
import { Card } from "flowbite-react";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const OutlineCard: React.FC<MyAppProps> = ({ children, className }) => {


  return (
    <Card className={`card ${className} border border-ld`}>{children}</Card>
  );

};

export default OutlineCard;
