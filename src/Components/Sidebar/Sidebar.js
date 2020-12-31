import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';

export default function Sidebar() {

    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2clMjBjb2xvciUyMGltYWdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar src={user.photourl} className="sidebar__avatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1290</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">544</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("Reactjs")}
                {recentItems("React Native")}
                {recentItems("Firebase")}
                {recentItems("Nodejs")}
            </div>
        </div>
    )
}
