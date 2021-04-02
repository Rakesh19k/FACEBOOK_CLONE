import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, VideoCall, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import "./CSS/MessageSender.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useStateValue } from './StateProvider';
import db from '../firebase';
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("")
    }

    return (
        <>
            <div className="messageSender">
                <div className="messageSender_top">
                    <Avatar src={user.photoURL} />
                    <form>
                        <input
                            className="messageSender_input"
                            type="text"
                            placeholder={`What's on your mind, ${user.displayName}`}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <input
                            placeholder="image URL (Optional)"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button onClick={handleSubmit} type="submit" />
                    </form>
                </div>
                <div className="messageSender_bottom">
                    <div className="messageSender_option">
                        <Videocam style={{ color: "red" }} />
                        <h3>Live Video</h3>
                    </div>

                    <div className="messageSender_option">
                        <PhotoLibrary style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                    </div>

                    <div className="messageSender_option">
                        <InsertEmoticon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
            <div className="messageSender">
                <div className="messageSender_Down">
                    <div className="messageSender_room">
                        <VideoCall style={{ color: "blue" }} />
                        <h3>Create Room</h3>
                    </div>
                    <div className="messageSender_avatar">
                        <Avatar className="msg_avatar" src="https://wallpapercave.com/wp/wp2976744.jpg" alt="" />
                        <Avatar className="msg_avatar" src="https://i.pinimg.com/236x/66/44/92/6644922ba5fc65e5d1f5a92332fef499.jpg" alt="" />
                        <Avatar className="msg_avatar" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <Avatar className="msg_avatar" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <Avatar className="msg_avatar" src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <Avatar className="msg_avatar" src="https://i.pinimg.com/originals/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt="" />
                        <NavigateNextIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageSender
