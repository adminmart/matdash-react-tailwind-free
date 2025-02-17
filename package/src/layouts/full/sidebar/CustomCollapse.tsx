
import { twMerge } from "tailwind-merge";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CustomCollapse: React.FC<{
    label: string;
    open: boolean;
    children:any;
    onClick: () => void;
    icon: string;
    className?: string;
    isPro?:boolean
  }> = ({ label, open, onClick, icon, children, className,isPro }) => {
    return (
      <div className={twMerge("transition-all duration-300")}>
        <div
          className={twMerge("flex cursor-pointer mb-1 items-center justify-between rounded-lg px-4 py-[11px] gap-3 text-[15px] leading-[normal] font-normal text-link nav-cover hover:text-primary dark:text-white  dark:hover:text-primary",className)}
          onClick={onClick}
        >
          <div className="flex items-center gap-3">
          <Icon icon={icon} height={18} />
            <span className="truncate max-w-28 nav-label "  >{label}</span>
          </div>
           <div className="flex items-center gap-0.5" >
           {isPro ? <span className="py-0.5 px-2.5 text-[10px] bg-secondary text-white rounded-sm">Pro</span> : null}
          <HiOutlineChevronDown
            className={twMerge("transform transition-transform", open ? "rotate-180" : "rotate-0")}
          />
           </div>
        </div>
        <div
          className={twMerge(
            "overflow-hidden transition-all duration-300",
            open ? "max-h-screen" : "max-h-0"
          )}
        >
          {children}
        </div>
      </div>
    );
  };

  export {CustomCollapse}