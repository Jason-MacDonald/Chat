import React from "react";
import firebase from "firebase/app";
import { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

const firestore = firebase.firestore();
const auth = firebase.auth();

const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "desc").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
      
    <React.Fragment>    
      <main>
        {messages && messages.slice().reverse().map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button className="ui big button primary" type="submit">send</button>
      </form>
    </React.Fragment>
  );
};

export default ChatRoom;
