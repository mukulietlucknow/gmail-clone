import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ArrowDropDown } from '@material-ui/icons';
import {useSelector} from 'react-redux';
import {SelectUser} from './features/counter/userSlice';
import { auth } from './firebase';
import {login, logout} from './features/counter/userSlice';
import {useDispatch} from 'react-redux';


function Header() {
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    }
    const user = useSelector(SelectUser)
    return (
        <div  className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="gmail logo"/>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search Mails" type="text"/>
                <ArrowDropDown className="header__inputCaret" />
            </div>
            <div className="header__right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar onClick={() => signOut()} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
