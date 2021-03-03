import './App.css';
import ChatRoom from './components/ChatRoom'
import Signin from './components/Signin'
import SignOut from './components/SignOut'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth } from './firebase'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
    <header>
      <h1>⚛️🔥💬</h1>
      <SignOut />
    </header>
      <section>
        {user ?
          <ChatRoom />
          : <Signin />}
      </section>
    </div>
  );
}

export default App;



