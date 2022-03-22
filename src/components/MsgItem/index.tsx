import { useEffect, useState } from "react";
import { updateMsg } from "../../services/firebase";
import { CloseOutline as IconClose, ArrowBackOutline as IconBack } from "@styled-icons/evaicons-outline";
import { ArrowCounterclockwise as IconUpdate, Check as IconInsert } from "@styled-icons/bootstrap";
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

  const [ updateText, setUpdateText ] = useState<string | undefined>(text);
  const [ activeUpdate, setActiveUpdate ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<boolean>(false);

  // Habilita as opções de excluir e editar mensagem

  /* Se o usuário for o mesmo que adicionou a mensagem, habilita as opções de editar e excluir */ 

  useEffect(() => {

    if(uid === 'sent'){
      setOptions(true);
    }else{
      setOptions(false);
    }

  },[uid]);

  /* Atualiza a mensagem e faz algumas verificações */

  const updateMsgText = () => {
    updateMsg(id, updateText, setActiveUpdate);
  }

  return(
    <div>
      ...
    </div>
  )
}