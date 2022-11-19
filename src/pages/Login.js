import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

function LoginPage({isLoggedIn, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn])


    return (
        <>
            <Header 
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div className = "PageWrapper">
                    <h1>Login</h1>
                    <LoginForm />
                </div>    
        </>
    );
};

export default LoginPage;