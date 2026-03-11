import InputField from "../components/Inputfields";
import Button from "../components/button";
import "./logincard.css";

function Fulllogin() {
    return (
        <div className="container">

            <div className="card">

                <h2 className="title">Login</h2>

                <InputField
                    type="text"
                    placeholder="User Name"
                    border="25px"
                    width="100%"
                />
                <br />

                <InputField
                    type="password"
                    placeholder="Password"
                    border="25px"
                    width="100%"
                />
                <br />
                <div className="btnlogin">
                  <Button text="Login "  width="60%" radius="25px"/>
                </div>
                

            </div>

        </div>
    );
}

export default Fulllogin;