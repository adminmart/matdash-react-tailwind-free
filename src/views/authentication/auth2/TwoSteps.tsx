import CardBox from 'src/components/shared/CardBox'
import { Link } from "react-router"
import AuthTwoSteps from '../authforms/AuthTwoSteps'
import BoxedAuthSlider from '../authforms/BoxedAuthSlider'
import FullLogo from 'src/layouts/full/shared/logo/FullLogo'

const TwoSteps = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-[url('/src/assets/images/backgrounds/login-bg.jpg')]">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="xl:max-w-6xl lg:max-w-3xl md:max-w-xl w-full border-none p-0">
            <div className="grid grid-cols-12">
              <div className="xl:col-span-6 col-span-12 px-8 xl:border-e border-ld">
                <div className="md:py-14 py-8 lg:px-6">
                  <FullLogo />
                  <p className="text-ld opacity-80 text-sm font-medium mt-4">
                    We sent a verification code to your mobile. Enter the code
                    from the mobile in the field below.
                  </p>
                  <h6 className="text-sm font-bold my-4 ">
                    ******1234
                  </h6>
                  <AuthTwoSteps />
                  <div className="flex gap-2 text-sm font-medium mt-6 items-center justify-left">
                    <p>Didn't get the code?</p>
                    <Link
                      to={"/"}
                      className="text-primary text-sm font-medium"
                    >
                      Resend
                    </Link>
                  </div>
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

export default TwoSteps