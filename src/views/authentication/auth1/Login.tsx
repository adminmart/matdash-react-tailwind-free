import Logo from "src/layouts/full/shared/logo/Logo"
import { Link } from "react-router"
import AuthLogin from "../authforms/AuthLogin"
import SocialButtons from "../authforms/SocialButtons"
import LeftSidebarPart from "../LeftSidebarPart"


const Login = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
              <div className="max-w-md w-full mx-auto">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">Sign In</h3>
                <p className="text-sm font-medium">
                  Your Admin Dashboard
                </p>
                <SocialButtons title="or sign in with" />
                <AuthLogin />
                <div className="flex gap-2 text-base dark:text-white font-medium mt-6 items-center justify-center">
                  <p>New to MatDash?</p>
                  <Link
                    to={"/auth/auth1/register"}
                    className="text-primary text-sm font-medium"
                  >
                    Create an account
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

export default Login