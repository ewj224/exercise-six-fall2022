import {useEffect, useState, useCallback} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {initializeApp} from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

////////17:30

//Styles and Components
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import CreateUserForm from './components/CreateUserForm';
import Header from "./components/Header";

function CreatPage() {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      // const auth = getAuth();

      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((userCredential)=>{
      //     const user = userCredential.user
      //     setLoggedIn(true)
      //   })

    }
  )
}


const firebaseConfig = {
  apiKey: "AIzaSyBY_jkE0onva7ytd1-w3zuxA0_42x0qSeA",
  authDomain: "exercise-six-fall-2022-5cea2.firebaseapp.com",
  projectId: "exercise-six-fall-2022-5cea2",
  storageBucket: "exercise-six-fall-2022-5cea2.appspot.com",
  messagingSenderId: "468952914807",
  appId: "1:468952914807:web:8eb48a062209e803295f72"
};


function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});



  useEffect(()=>{
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  // Check to see if user is logged in
  // user loads page, check their status
  // Set state accordingly

  useEffect(()=>{
    if (appInitialized){
      const auth = getAuth();
      onAuthStateChanged(auth,(user)=>{
        if (user) {
          // User is signed in, see docs for a lsit of available properties
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          // User is signed out
          setUserInformation({});
          setIsLoggedIn(false)
        }
        // Whenever state changes setloading to false
        setIsLoading(false);
      })
    }
  }, [appInitialized])

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <UserProfilePage
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          isLoading = {isLoading}
          userInformation = {userInformation}
          setUserInformation = {setUserInformation}

        />,
    },
    {
      path: "/login",
      element: 
        <LoginPage
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          setUserInformation = {setUserInformation}
        />,
    },
    {
      path: "/create",
      element: 
        <CreateUserPage
          isLoggedin={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  
 

}

export default App;
