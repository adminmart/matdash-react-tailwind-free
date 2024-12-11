import { FC } from 'react';
import { Outlet } from "react-router";
import ScrollToTop from 'src/components/shared/ScrollToTop';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';



const FullLayout: FC = () => {
  return (
      <>
    <div className="flex w-full min-h-screen dark:bg-darkgray">
      <div className="page-wrapper flex w-full  ">
        {/* Header/sidebar */}
            <Sidebar /> 
        <div className="page-wrapper-sub flex flex-col w-full dark:bg-darkgray">
          {/* Top Header  */}
           <Header/>

          <div
            className={`bg-lightgray dark:bg-dark  h-full rounded-bb`}
          >
            {/* Body Content  */}
            <div
              className={`w-full`}
            >
              <ScrollToTop>
                <div className="container py-30">
                <Outlet/>
                </div>
              </ScrollToTop>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default FullLayout;
