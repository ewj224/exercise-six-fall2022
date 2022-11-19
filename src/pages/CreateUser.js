import React, { useCallBack, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import CreateUserForm from '../components/CreateUserForm';
import Header from '../components/Header';

function CreateUserPage({ isLoggedIn, setIsLoggedIn, setUserInformation}){
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn]);

    const signUpUser = useCallBack(
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const auth = getAuth();

            console.log({email, password})

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setUserInformation({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        accessToken: user.accessToke
                    });
                    setErrors();
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage});
                    setErrors(errorMessage);
                });
        },
        [setErrors, setIsLoggedIn, setUserInformation]
    );  


    return (
        <>
            <Header 
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div className = "PageWrapper">
                <h1>Create User</h1>
                <CreateUserForm signUpUser={signUpUser}/>
                <p>{errors}</p>
            </div>  
        </>  
    );
};

export default CreateUserPage;