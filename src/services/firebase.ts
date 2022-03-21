import { db, auth } from "../config/firebase";
import { 
  collection, query, orderBy, limit, onSnapshot, 
  doc, addDoc, updateDoc, deleteDoc, serverTimestamp 
} from "firebase/firestore";
import { Message } from "../types/Message";

// Recebe a lista de messagens no chat

export const listMsg = ( setMessages: any ) => {

  const msgRef = collection(db, 'messages');
  const queryMsg = query(msgRef, orderBy('createdAt'), limit(50));

  onSnapshot(queryMsg, snapshot => {
    /* manda os dados informados para nosso array */
    let newMsg: Message[] = [];
      snapshot.docs.map((doc: any) => (
        newMsg.push({...doc.data(), id: doc.id})
      ))
    setMessages(newMsg);
  });

} 

// Adiciona mensagem no chat

export const addMsg = async ( msg: string ) => {

  const { uid, photoURL }: any = auth.currentUser;

  const msgRef = collection(db, 'messages');

  await addDoc(msgRef,{
    text: msg,
    photoURL,
    uid,
    createdAt: serverTimestamp()
  });

}

// Deleta alguma mensagem no chat

export const deleteMsg = ( id: string ) => {
  const msgDocRef = doc(db, 'messages', id);
  deleteDoc(msgDocRef);
}

// Atualiza a mensagem já adicionada no chat

export const updateMsg = async ( id: string, updateText: string | undefined, setActiveUpdate: any ) => {

  const msgDocRef = doc(db, 'messages', id);

  await updateDoc(msgDocRef, {
    text: updateText
  }).then(() => {
    /* Condições depois de ter atualizado a mensagem no chat */
    if(updateText === ''){
      setActiveUpdate(false);
    }else{
      setActiveUpdate(false);
    }
  });

}