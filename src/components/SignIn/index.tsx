import { auth } from "../../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import * as C from "./styles";

// Logar no chat com google authentication

export const SignIn = () => {

  /* Cria autenticação entre o usuário e a google através do firebase */

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  return(
    <div>
      ...
    </div>
  )
}