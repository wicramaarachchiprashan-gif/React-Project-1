import InputField from "../components/Inputfields";
import Button from "../components/button";
import "./logincard.css";

function Fulllogin() {
    return (
        <div className="container">

            <div className="card">

                <h2 className="title">Register</h2>

                <InputField
                    type="text"
                    placeholder="Full Name"
                    border="10px"
                    width="100%"
                />
                <br />

                <InputField
                    type="email"
                    placeholder="Email"
                    border="10px"
                    width="100%"
                />
                <br />

                <InputField
                    type="text"
                    placeholder="Phone"
                    border="10px"
                    width="100%"
                />
                <br />

                <InputField
                    type="password"
                    placeholder="Password"
                    border="10px"
                    width="100%"
                />

                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    border="10px"
                    width="100%"
                />

                <br />
                <div className="btnlogin">
                  <Button text="Register "  width="100%" bgcolor="#8B54FF" radius="15px"/>
                </div>

                <div className="btnlogin">
                  <Button text="Have account? Sign In"  width="100%" radius="15px"/>
                </div>
                

            </div>

        </div>
    );
}

export default Fulllogin;