import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch()

  const user = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
      console.log(authuser)
      if(authuser){
        //user logged in
        //push the user information to the store
        dispatch(login({
          uid : authuser.uid,
          photo : authuser.photoURL,
          email : authuser.email,
          displayName : authuser.displayName
        }))
      }
      else{
        //user loggedout
        dispatch(logout())
      }
    })
       
  },[dispatch])

  return (
    <div className="app">
       {user ? (
         <>
           <Sidebar/>
           <Chat/>
         </>
       ) : (
         <Login/>
       )}
    </div>
  );
}

export default App;
