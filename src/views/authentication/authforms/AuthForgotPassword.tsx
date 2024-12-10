
import { Button, Label, TextInput } from "flowbite-react";
import { useLocation } from "react-router";



const AuthForgotPassword = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd" value="Email Address" />
          </div>
          <TextInput
            id="emadd"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        {pathname == "/auth/auth2/forgot-password" ? (
          <Button className="rounded-md w-full bg-sky dark:bg-sky  hover:bg-dark dark:hover:bg-dark">
            Forgot Password
          </Button>
        ) : (
          <Button color={"primary"} className="rounded-md w-full">
            Forgot Password
          </Button>
        )}
      </form>
    </>
  );
};

export default AuthForgotPassword;
