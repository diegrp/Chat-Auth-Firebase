import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const Container = styled.div`
`;

export const FormSendMsg = styled.form`
  z-index: 1;
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  border-top: 1px solid lightgray;
  padding: 30px;
  background-color: var(--background-default-received);
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 1rem;
`;

export const InputMsg = styled(TextField)`
  &&{
    width: 100%;
    font-size: var(--size-medium);
  }
`;

export const BtnMsg = styled(Button)`
  &&{
    font-size: var(size-small);
  }
`;