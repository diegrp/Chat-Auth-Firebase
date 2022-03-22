import { Chat } from "./components/Chat";
import { SignIn } from "./components/SignIn";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Chat Google Auth Firebase

const App = () => {

  const [ user ] = useAuthState(auth);

  return(
    <main>
      { user ? <Chat/> : <SignIn/> }
    </main>
  )
}

export default App;