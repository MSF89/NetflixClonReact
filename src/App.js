import React, { useEffect } from 'react';
import Login from './Pages/Login';
import './styles/App.css'
import Home from './Pages/Home';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';



function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubsribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout)
      }
    });
    return unsubsribe
  },[dispatch])

  return (
    <div className='main'>
       {!user ? (<Login/>) : (<Home/>)}
    </div>
  )
}
export default App;



