import {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {initializeApp} from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Styles and Components
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyBY_jkE0onva7ytd1-w3zuxA0_42x0qSeA",
  authDomain: "exercise-six-fall-2022-5cea2.firebaseapp.com",
  projectId: "exercise-six-fall-2022-5cea2",
  storageBucket: "exercise-six-fall-2022-5cea2.appspot.com",
  messagingSenderId: "468952914807",
  appId: "1:468952914807:web:8eb48a062209e803295f72"
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfilePage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/create",
    element: <CreateUserPage/>,
  },
]);


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

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
  
 

}

export default App;
