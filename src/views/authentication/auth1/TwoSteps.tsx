import Logo from "src/layouts/full/shared/logo/Logo"
import { Link } from "react-router"
import AuthTwoSteps from "../authforms/AuthTwoSteps"
import LeftSidebarPart from "../LeftSidebarPart"


const TwoSteps = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-md mx-auto ">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">
                  Two Steps Verification
                </h3>
                <p className="text-ld opacity-80 text-sm font-medium">
                  We sent a verification code to your mobile. Enter the code
                  from the mobile in the field below.
                </p>
                <h6 className="text-sm font-bold my-4">******1234</h6>
                <AuthTwoSteps />
                <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-left">
                  <p>Didn't get the code?</p>
                  <Link to={"/"} className="text-primary text-sm font-medium">
                    Resend
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 bg-[#0A2540] dark:bg-dark lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoSteps