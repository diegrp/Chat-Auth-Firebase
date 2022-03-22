import { auth } from "../../config/firebase";
import * as C from "./styles";

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