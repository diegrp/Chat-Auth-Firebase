import { useState, useEffect, useRef, RefObject } from "react";
import { deleteMsg, listMsg } from "../../services/firebase";
import { auth } from "../../config/firebase";
import { Message } from "../../types/Message";
import { MsgItem } from "../MsgItem";
import { SignOut } from "../SignOut";
import { SendMessage } from "../SendMessage";
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
    <C.Container>
      <SignOut/>
        <C.MsgArea>
          {messages.map(({ id, photoURL, text, uid }: Message) => (
            <div key={id}>
              <MsgItem
                id={id}
                text={text}
                photoURL={photoURL}
                uid={user === uid ? 'sent':'received'} /* verificar se o usuário logado é o mesmo que adicionou a mensagem na lista */
                onDelete={onDelete}
              />
            </div>
          ))}
        </C.MsgArea>
        {/* Repassa a ref do evento para o componente*/}
        <SendMessage scroll={scroll} /> 
        <div ref={scroll}></div>
    </C.Container>
  )
}