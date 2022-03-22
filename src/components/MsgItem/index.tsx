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
    <C.MsgWrapper 
      user={uid} 
      options={options} 
      activeUpdate={activeUpdate} 
      text={text}
    >
      <img 
        src={photoURL} 
        title="Imagem do usuário" 
        alt="Imagem de perfil do usuário" 
      />

      {uid === 'sent' && options &&
        <C.UserOptions options={options}>
        {!activeUpdate ? (
          <>
            <C.IconDelete onClick={() => onDelete(id)}>
              <span>
                <IconClose size={15} />
              </span>
            </C.IconDelete>
            <C.IconUpdate onClick={() => setActiveUpdate(true)}>
              <span>
                <IconUpdate size={15} />
              </span>
            </C.IconUpdate>
          </>
        ):(
          <>
            <C.IconBack onClick={() => setActiveUpdate(false)}>
              <span>
                <IconBack size={15} />
              </span>
            </C.IconBack>
            <C.IconUpdate onClick={() => {
              if(updateText !== ''){
                updateMsgText();
              }else{
                setActiveUpdate(false);
              }
            }}>
              <span>
                <IconInsert size={15} />
              </span>
            </C.IconUpdate>
          </>
        )}
        </C.UserOptions>
      }
      
      {activeUpdate ? (
        <C.InputUpdate      
          type="text"
          value={updateText}
          error={updateText !== '' ? false:true}
          placeholder={`${updateText !== '' ? 'Digite a nova mensagem':'Preencha o campo vazio'}`}
          onChange={({target}) => setUpdateText(target.value)}
          onKeyPress={(e) => {

            /* Atualiza a mensagem ao pressionar 'Enter' */

            if(e.key === 'Enter' && updateText !== '' ){
              updateMsgText();
            }else if(e.key === 'Enter' && updateText === ''){
              setActiveUpdate(false);
            }
          }}
        />
      ):(
        <p>{text}</p>
      )}
    </C.MsgWrapper>
  )
}