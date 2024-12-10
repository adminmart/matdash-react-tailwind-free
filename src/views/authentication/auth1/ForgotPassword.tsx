import Logo from "src/layouts/full/shared/logo/Logo"
import { Button } from "flowbite-react"
import { Link } from "react-router"
import AuthForgotPassword from "../authforms/AuthForgotPassword"
import LeftSidebarPart from "../LeftSidebarPart"


const ForgotPassword = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-md mx-auto ">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">Forgot Password</h3>
                <p className="text-ld opacity-80 dark:text-white/60 text-sm font-medium">
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </p>
                <AuthForgotPassword />
                <Button
                  color={"lightprimary"}
                  as={Link}
                  to="/auth/auth1/login"
                  className="rounded-md w-full mt-4"
                >
                  Back to Login
                </Button>
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

export default ForgotPassword