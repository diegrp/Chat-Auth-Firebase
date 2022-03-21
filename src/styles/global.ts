import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --background-color-chat: #eeee;
    --background-sent: ##395dff;
    --background-default-received: #fafafa;

    --size-medium: 18px;
    --size-small: 15px;
  }

  html, body{
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #000;
  }
  
`;