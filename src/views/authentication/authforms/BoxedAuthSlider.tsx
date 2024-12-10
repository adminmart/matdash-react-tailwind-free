
import { Carousel } from "flowbite-react";
import AuthSlide from "/src/assets/images/backgrounds/login-side.png";
import { Button } from "flowbite-react";
import { useLocation } from "react-router";


const SliderData = [
  {
    title: "Feature Rich 3D Charts",
    desc: "Donec justo tortor, malesuada vitae faucibus ac, tristique sit amet massa. Aliquam dignissim nec felis quis imperdiet.",
  },
  {
    title: "Feature Rich 2D Charts",
    desc: "Donec justo tortor, malesuada vitae faucibus ac, tristique sit amet massa. Aliquam dignissim nec felis quis imperdiet.",
  },
  {
    title: "Feature Rich 1D Charts",
    desc: "Donec justo tortor, malesuada vitae faucibus ac, tristique sit amet massa. Aliquam dignissim nec felis quis imperdiet.",
  },
];

const BoxedAuthSlider = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <div className="max-w-md mx-auto h-full flex flex-col justify-center items-center boxed-auth">
        <img
          src={AuthSlide}
          alt="auth"
          className={`${
            pathname == "/auth/auth2/forgot-password" ||
            pathname == "/auth/auth2/two-steps"
              ? "max-w-[200px]"
              : "max-w-[300px]"
          }`}
        />

        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
          className={`${
            pathname == "/auth/auth2/forgot-password" ||
            pathname == "/auth/auth2/two-steps"
              ? "!h-[150px]"
              : "-mt-8"
          }`}
        >
          {SliderData.map((item, index) => (
            <div key={index} className="text-center ">
              <h5 className="text-22 my-6">{item.title}</h5>
              <p
                className={`${
                  pathname == "/auth/auth2/forgot-password" ||
                  pathname == "/auth/auth2/two-steps"
                    ? "hidden"
                    : "text-15 my-6 mt-3 leading-6"
                }`}
              >
                {item.desc}
              </p>
              <Button color={"primary"} className="w-fit mx-auto ">
                Learn More
              </Button>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default BoxedAuthSlider;
