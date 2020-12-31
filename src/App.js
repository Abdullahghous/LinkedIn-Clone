import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Login/Login';
import { selectUser, loginn } from './features/userSlice';
import { auth } from './Config/Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          loginn({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photourl: userAuth.photoURL
          })
        )
      }
    })
  }, [])

  return (
    <div className="app">
      {
        !user ?
          (
            <>
              <Login />
            </>
          )
          :
          (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </>
          )
      }
    </div>
  );
}

export default App;
