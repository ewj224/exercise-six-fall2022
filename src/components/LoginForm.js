import React from "react";

function LoginForm () {
    return (
    <form className="FormElement">
        <label htmlFor="useName">User Name</label>
        <input type="text" name="userName"/>
        <label htmlFor="userPassword">Password</label>
        <input type="password" name="userPassword"/>

        <button type="submit">Submit</button>
    </form>
    );
}

export default LoginForm;