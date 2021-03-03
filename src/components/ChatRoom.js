import React,{useState, useRef} from 'react';
import ChatMessage from './ChatMessage'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {auth, firebase, firestore} from '../firebase'

const ChatRoom = () =>
{
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [formValue, setFormValue] = useState('')
    const [messages] = useCollectionData(query, { idField: 'id' })
    const dummy = useRef();

    const sendMessage = async e =>
    {
        e.preventDefault()
        console.log("message was just submitted", formValue)
        const { uid, photoURL } = auth.currentUser

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid, 
            photoURL 
        })
        dummy.current.scrollIntoView({ behavior: 'smooth' })
        setFormValue('')
    }
    
  return (
    <div>
        <main>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <div ref={dummy}></div>
        </main>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>🕊️</button>
        </form>
    </div>
  )
}

export default ChatRoom
