import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../Config/Firebase';
import { loginn } from '../../features/userSlice';
import './Login.css';

export default function Login() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert('Please Enter Full Name!');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(loginn({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photourl: profilePic
                        }))
                    })
            })
            .catch((error) => alert(error));
    }

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(loginn({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photourl: userAuth.user.photoURL
                }))
            })
            .catch((error) => alert(error));
    }

    return (
        <div className="login">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedIn" />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    type="text"
                />
                <input
                    value={profilePic}
                    onChange={(e) => setprofilePic(e.target.value)}
                    placeholder="Profile Pic URL ( Optional )"
                    type="text"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit" onClick={login}>Sign-In</button>
            </form>
            <p>Don't have a account ?
                <span onClick={register} className="login__register">Register Now</span>
            </p>
        </div>
    )
}
