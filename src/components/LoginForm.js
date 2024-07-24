import React from "react";
import SubmitButton from "./submit-button";

export default class LoginForm extends React.Component {
    render() {//bootstrap default form. Specifically styled on CSS.
        return (
            <>
                <h3>Log In</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" className="form-control" id="username" placeholder="Enter email" />
                        <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <br></br>
                    <SubmitButton />
                </form>
            </>
        );
    }
}
