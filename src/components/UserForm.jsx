import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };


    const validateForm = (e) => {
        e.preventDefault();

        let isValidForm = true;

        // first name
        if (firstName.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
            isValidForm = false;
        } else {
            setFirstNameError("");
        }

        // last name
        if (lastName.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
            isValidForm = false;
        } else {
            setLastNameError("");
        }

        // email
        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
            isValidForm = false;
        } else {
            setEmailError("");
        }

        // password
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            isValidForm = false;
        } else {
            setPasswordError("");
        }

        // confirm password
        if (password !== confirm) {
            setConfirmError("Passwords must be match");
            isValidForm = false;
        } else {
            setConfirmError("");
        }

        if (isValidForm) {
            createUser(e);
            console.log(formMessage());
            setFirstNameError("");
            setLastNameError("");
            setEmailError("");
            setPasswordError("");
            setConfirmError("");
        }
    }
    return (
        <>
            
            <div className='card shadow card-info mx-auto w-50 p-3'>
                <div className="card-header mb-5"><strong>Registration Form</strong></div>
                <card-body>
                    <form onSubmit={validateForm}>
                        <div className='form-text text-success'>{formMessage()}</div>
                        
                        {/* first name */}
                        <div className='mb-4'>
                            <label>First Name:  </label>
                            <input type='text' className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value); }} />
                        </div>
                        {firstNameError ? <p className='form-text text-danger'>{firstNameError}</p> : ""}
                        {/* last name */}
                        <div className='mb-4'>
                            <label>Last Name:  </label>
                            <input type='text' className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
                        </div>
                        {lastNameError ? <p className='form-text text-danger'>{lastNameError}</p> : ""}

                        {/* Email */}
                        <div className='mb-4'>
                            <label>Email:  </label>
                            <input type='text' className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                        </div>
                        {emailError ? <p className='form-text text-danger'>{emailError}</p> : ""}
                        {/* password */}
                        <div className='mb-4'>
                            <label>Password:  </label>
                            <input type='password' className="form-control" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                        </div>
                        {passwordError ? <p className='form-text text-danger'>{passwordError}</p> : ""}
                        {/* confirm password */}
                        <div className='mb-4'>
                            <label>Confirm Password:  </label>
                            <input type='password' className="form-control" value={confirm} onChange={(e) => { setConfirm(e.target.value); }} />
                        </div>
                        {confirmError ? <p className='form-text text-danger'>{confirmError}</p> : ""}
                        <div className="text-end">
                            {firstName && lastName && email && password && confirm ?
                                (
                                    <button type='submit' className='btn btn-success'>Submit</button>
                                ) : (
                                    <button type='submit' className='btn btn-success disable'>Submit</button>
                                )}
                        </div>
                    </form>
                </card-body>
            </div>
        </>
    );
};

export default UserForm;
