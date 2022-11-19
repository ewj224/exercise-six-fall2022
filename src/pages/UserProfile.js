import React, {useEffect} from 'react';
import {useNavigate } from "react-router-dom"
import Header from '../components/Header';

function UserProfilePage({ isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation}){
   const navigate = useNavigate();

    useEffect(()=>{
        if (!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn])

    return (
        <>
            <Header 
                setIsLoggedIn={setIsLoggedIn} 
                setUserInformation={setUserInformation}
            />
            <div  className = "PageWrapper">
                <h1>User Profile</h1>
                <p><strong>Display Name: </strong>{userInformation.displayName}</p>
                <p><strong>Email: </strong>{userInformation.email}</p>
                <p><strong>User ID: </strong>{userInformation.uid}</p>
            </div>   
        </>
    ); 
}

export default UserProfilePage;