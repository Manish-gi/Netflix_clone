import React, { useState } from "react";
import SignInScreen from "./SignInScreen";
import "./Login.css";

function Login (){

    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
                />
                <button onClick={() => setSignIn(true)} 
                className="loginScreen_button">
                    Sign In
                </button>
                <div className="loginScreen_gradient"></div>

                <div className="loginScreen_body">
                    {
                        signIn ? (
                            <SignInScreen/>
                        ) :(
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>
                            Watch anywhere. Cancel at any time.
                        </h2>
                        <h3>Ready to watch? Enter your email to Create or restart your membership</h3>

                        <div className="loginScreen_input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button onClick={() => setSignIn(true)}
                                className="loginScreen_getStarted">GET STARTED</button>
                            </form>
                        </div>
                        </>
                    )}
                </div>


            </div>
        </div>
    )
}

export default Login