import styled from "styled-components";
import { Input } from "@material-ui/core";

export const MsgWrapper = styled.div<{ user: string, options: boolean, activeUpdate: boolean, text?: string }>`

  width: ${props => props.activeUpdate && props.text ? `${props.text.length + 12}%`:'auto'};
  display: flex;
  padding: "10px 20px";
  word-break: break-all;
  margin: 20px;
  border-radius: 3000px;
  box-shadow: 0 0 10px rgb(164, 164, 164);
  align-items: center;

  float: ${props => props.user === 'sent' ? 'right':'left'};
  flex-direction: ${props => props.user === 'sent' && 'row-reverse'};
  background-color: ${props => props.user === 'sent' ? '#395dff':'#fafafa'};
  padding: ${props => props.user === 'sent' ? '10px 20px':'10px 20px'};
  border: ${props => props.user === 'received' && 'border: 1px solid lightgray'};
  border-top-right-radius: ${props => props.user === 'sent' && '1000px'};
  border-top-left-radius: ${props => props.user === 'received' && '1000px'};
  color: ${props => props.user === 'sent'? 'white':'black'};
  text-align: ${props => props.user === 'sent' && 'end'};

  &:hover div{
    display: flex;
  }

  img{
    border-radius: 50%;
    height: 35px;
  }

  p{
    font-size: 18px;
    margin-right: ${props => props.user === 'sent' && '10px'};
    margin-left: ${props => props.user === 'received' && '10px'};
  }

  @media (max-width: 775px) {
    p {
      font-size: 16px;
    }
    .sent {
      padding: 10px 10px;
    }
    .received {
      padding: 10px 10px;
    }
    img {
      height: 33px;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 15px;
    }
    .sent {
      padding: 7px 7px;
    }
    .received {
      padding: 7px 7px;
    }
    img {
      height: 30px;
    }
  }
`;

export const InputUpdate = styled(Input)`
  &&{
    width: 100%;
    font-size: 17px;
    margin-right: 0.5rem;
    color: white;
  }
`;

export const UserOptions = styled.div<{ options:boolean }>`
  display: ${props => props.options ? 'none':'flex'};
  align-items: center;
  background-color: var(--background-sent);
  justify-content: center;
  gap: 0.5rem;
  animation: animeOptions 0.3s forwards;
  margin-right: 0.5rem;

  @keyframes animeOptions{
    from{
      opacity: 0;
      transform: translateX(20px);
    }
    to{
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const IconUpdate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: var(--background-sent);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  border: 1px solid white;
  cursor: pointer;

  &:hover{
    color: white;
    background-color: gray;
  }
`;

export const IconBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: var(--background-sent);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  border: 1px solid white;
  cursor: pointer;

  span{
    transform: rotate(180deg);
  }

  &:hover{
    color: white;
    background-color: gray;
  }

`;

export const IconDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: var(--background-sent);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  border: 1px solid white;
  cursor: pointer;

  &:hover{
    color: white;
    background-color: gray;
  }
`;