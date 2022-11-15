import React from "react";

function CreateUserForm () {
    return (
    <form className = "FormElement">
        <label for="CreateUser">Create User</label>
        <input type="text" name="CreateUser"/>

        <button type="submit">Submit</button>
    </form>
    );
}

export default CreateUserForm;