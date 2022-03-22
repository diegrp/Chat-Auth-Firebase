import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnSignIn = styled(Button)`
  &&{
    font-size: var(--size-small);
    padding: 10px;
  }
`;