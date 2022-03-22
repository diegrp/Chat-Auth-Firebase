import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: var(--background-default-received);
  border-bottom: solid 1px lightgray;
  padding: 10px;
`;

export const BtnSignOut = styled(Button)`
  &&{
    font-size: var(--size-small);
    padding: 10px;
  }
`;