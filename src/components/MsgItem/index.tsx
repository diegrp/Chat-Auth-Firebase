import * as C from "./styles";

type Props = {
  id: string
  text?: string
  photoURL?: string
  uid: string
  onDelete: (id: string) => void
}

// Mensagens do chat

export const MsgItem = ( { id, text, photoURL, uid, onDelete }: Props ) => {
  return(
    <div>
      ...
    </div>
  )
}