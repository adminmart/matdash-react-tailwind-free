import { Button } from "flowbite-react";
import { Link } from "react-router";
import ErrorImg from "/src/assets/images/backgrounds/maintenance.svg";

const Maintainance = () => {
  return (
    <>
    <div className="h-screen flex items-center  justify-center bg-white dark:bg-darkgray ">
      <div className="text-center max-w-lg mx-auto">
        <img src={ErrorImg} alt="error"  className="mb-4"/>
          <h1 className="text-dark dark:text-white text-4xl mb-6">Maintenance Mode!!!</h1>
          <h6 className="text-xl text-dark dark:text-white">Website is Under Construction. Check back later!</h6>
          <Button color={"primary"} as={Link} to="/" className="w-fit mt-6 mx-auto">
            Go Back to Home
          </Button>
      </div>
    </div>
  </>
  )
}

export default Maintainance