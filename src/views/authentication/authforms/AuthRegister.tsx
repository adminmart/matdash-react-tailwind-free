import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";


const AuthRegister = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
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
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" value="Password" />
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className="form-control"
          />
        </div> 
        <Button color={'primary'} onClick={() => navigate("/")} className="rounded-md  w-full">Sign Up</Button> 
        
      </form>
    </>
  )
}

export default AuthRegister
