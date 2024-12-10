import CardBox from "src/components/shared/CardBox"
import AuthForgotPassword from "../authforms/AuthForgotPassword"
import BoxedAuthSlider from "../authforms/BoxedAuthSlider"
import { Link } from "react-router"
import { Button } from "flowbite-react"
import FullLogo from "src/layouts/full/shared/logo/FullLogo"


const ForgotPassword = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-[url('/src/assets/images/backgrounds/login-bg.jpg')]">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="xl:max-w-6xl lg:max-w-3xl md:max-w-xl w-full border-none p-0">
            <div className="grid grid-cols-12">
              <div className="xl:col-span-6 col-span-12 px-8 xl:border-e border-ld">
                <div className="md:py-14 py-8 lg:px-6">
                  <FullLogo />
                  <p className="text-ld opacity-80 text-sm my-4">
                    Please enter the email address associated with your account
                    and We will email you a link to reset your password.
                  </p>
                  <AuthForgotPassword />
                  <Button
                    color={"lightprimary"}
                    as={Link}
                    to="/auth/auth2/login"
                    className="rounded-md w-full mt-3"
                  >
                    Back to Login
                  </Button>
                </div>
              </div>
              <div className="xl:col-span-6 col-span-12 xl:block hidden">
                <BoxedAuthSlider />
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword