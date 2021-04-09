import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from "./SendMail";
import {selectSendMessageIsOpen} from './features/counter/mailSlice';
import {SelectUser} from './features/counter/userSlice';
import {useSelector} from 'react-redux';
import Login from "./Login";
import { auth,provider } from "./firebase";
import {login, logout} from './features/counter/userSlice';
import {useDispatch} from 'react-redux';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(SelectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
      }))
      }else{
        //something
      }
    })
  }, []);
  return (      
      <Router>
        { !user ? ( <Login />) : (
          <div className="app">
          <Header />
          <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
          {sendMessageIsOpen && <SendMail />}
        </div>
        </div>
        )}
      </Router>
  );
}

export default App;
