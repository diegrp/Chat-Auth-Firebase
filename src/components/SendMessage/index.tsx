import { FormEvent, useState } from "react";
import { addMsg } from "../../services/firebase";
import * as C from "./styles";

// Área de envio da mensagem ao chat

export const SendMessage = ( { scroll }: any  ) => {

  const [ msg, setMsg ] = useState<string>('');
  const [ empty, setEmpty ] = useState<boolean>(false);

  // Formulário para envio da mensagem

  /* Adiciona a mensagem, reseta e verifica se o campo está vazio */

  const sendMsgText = ( e: FormEvent <HTMLFormElement> ) => {

    e.preventDefault();

    if(msg !== ''){
      /* Adiciona mensagem no chat */
      addMsg(msg);

      setMsg('');
      setEmpty(false);

      /* Desce a barra até o fim ao enviar a mensagem */
      scroll.current.scrollIntoView({ behavior: 'smooth' })

    }else{
      setEmpty(true);
    }
  }

  return(
    <C.Container>
      <C.FormSendMsg onSubmit={sendMsgText}>
        <C.FormWrapper>
          <C.InputMsg
            type="text"
            value={msg}
            label="Digite sua mensagem"
            helperText={empty ? 'O campo de mensagem está vazio':''}
            error={empty}
            onChange={({target}) => setMsg(target.value)}
          />  
          <C.BtnMsg
            type="submit"
          >
            Enviar Mensagem
          </C.BtnMsg>
        </C.FormWrapper>
      </C.FormSendMsg>
    </C.Container>
  )
}