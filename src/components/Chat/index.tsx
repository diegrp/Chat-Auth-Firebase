import { useState, useEffect, useRef, RefObject } from "react";
import { deleteMsg, listMsg } from "../../services/firebase";
import { auth } from "../../config/firebase";
import { Message } from "../../types/Message";
import * as C from "./styles";

// Chat

export const Chat = () => {

  const [ messages, setMessages ] = useState <Message[]>([]);
  const scroll = useRef<null | undefined>() as RefObject<HTMLDivElement>;

  /* Pega o uid do usuário logado ao carregar á pagina */

  const user: any = auth.currentUser?.uid;

  /* Lista as mensagens existentes em nosso array */

  useEffect(() => {
    listMsg(setMessages);
  },[]);

  /* Apaga a mensagem pelo id */

  const onDelete = ( id: string ) => {
    deleteMsg(id);
  }

  return(
    <div>
      ...
    </div>
  )
}