import React from "react";
import SubmitButton from "./submit-button";

export default class LoginForm extends React.Component {
    render() {
        return (
            <>
                <h3>Log In</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <SubmitButton />
                </form>
            </>
        );
    }
}
