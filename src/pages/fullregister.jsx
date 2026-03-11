

import InputField from "../components/Inputfields";
import Button from "../components/button";
import "./fullregister.css";

function Fullregister() {
  return (
    <div className="content">

      <div className="left">

        <div className="logo">
          <img src="../../assest/image 1 (1).png" alt="" />
        </div>

        <div className="text">
          <h1>
            Welcome.<br />
            Start your journey<br />
            now with our<br />
            Student<br />
            management<br />
            system!
          </h1>
        </div>

      </div>

      <div className="right">

        <div className="card">

          <h1>Create an account</h1>

          <div className="formcontent">

            <label>Email</label>
            <InputField
              type="email"
              placeholder="Enter your Email"
              border="10px"
              width="100%"
            />

            <label>Password</label>
            <InputField
              type="password"
              placeholder="Enter your password"
              border="10px"
              width="100%"
            />

            <Button text="Create account" width="100%" />

            <Button
              text="Continue with Google"
              bgcolor="white"
              width="100%"
            />

          </div>

          <p className="message">
            Already Have An Account ? <a href="#">Log In</a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Fullregister;