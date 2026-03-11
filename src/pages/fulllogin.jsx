import InputField from "../components/Inputfields";
import Button from "../components/button";
import "./fulllogin.css";

function Fulllogin() {
    return (
        <div className="container">

            <div className="card">

                <h2 className="title">Login to your account</h2>

                <label className="label">Email</label><br />
                <InputField
                    type="email"
                    placeholder="Enter your email"
                    border="8px"
                    width="100%"
                />
                <br />

                <div className="line">
                    <label className="label">Password</label>
                    <a className="forget">Forgot ?</a>
                </div>
                <br />

                <InputField
                    type="password"
                    placeholder="Enter your password"
                    border="8px"
                    width="100%"
                />
                <br />
                <Button text="Login now"  width="100%"/>

                <p className="message">
                    Don't Have An Account ? <a href="#">Sign Up</a>
                </p>

            </div>

        </div>
    );
}

export default Fulllogin;