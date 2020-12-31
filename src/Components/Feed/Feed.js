import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import { db } from '../../Config/Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

export default function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timeStamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            ))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            des: user.email,
            msg: input,
            photoURL: user.photourl,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Start a post"
                        />
                        <button type="submit" onClick={submit} >Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption title="Photo" Icon={PhotoIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={YouTubeIcon} color="#e7a33e" />
                    <InputOption title="Document" Icon={InsertDriveFileIcon} color="#7fc15e" />
                    <InputOption title="Write artile" Icon={AssignmentIcon} color="#f5987e" />
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({ id, data: { name, des, msg, photoURL } }) => (
                        <Post
                            key={id}
                            name={name}
                            des={des}
                            msg={msg}
                            photoURL={photoURL}
                        />
                    ))
                }
            </FlipMove>
            {/* <div>
                <Post
                    name="M Abdullah Ghous"
                    des="description here"
                    msg="hello hello"
                />
            </div> */}
        </div>
    )
}
