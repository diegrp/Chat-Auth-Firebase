import { auth } from "../../config/firebase";
import * as C from "./styles";

// Deslogar no chat com google authentication

export const SignOut = () => {
  return(
    <C.Container>
      <C.BtnSignOut
        onClick={() => auth.signOut()}
      >
        Sair
      </C.BtnSignOut>
    </C.Container>
  )
}