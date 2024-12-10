
import Bgimg from "/src/assets/images/logos/logo-icon.svg";
import { Button } from "flowbite-react";

const LeftSidebarPart = () => {
  return (
    <>
      <div className="circle-top"></div>
      <div>
        <img src={Bgimg} alt="materilm" className="circle-bottom" />
      </div>
      <div className="flex xl:justify-start justify-center xl:ps-80 h-screen items-center z-10 relative">
        <div className="max-w-md">
          <h2 className="text-white text-[40px] font-bold leading-[normal]">
            Welcome to
            <br></br>
            MatDash
          </h2>
          <p className="opacity-75 text-white my-4 text-base font-medium">
            MatDash helps developers to build organized and well coded
            dashboards full of beautiful and rich modules.
          </p>
          <Button className="mt-6" color={"primary"}>Learn More</Button>
        </div>
      </div>
    </>
  );
};

export default LeftSidebarPart;
