import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
  margin: auto;
  background-color:#F6F7F8;
  color: #3A474E;
  font-family: 'Roboto', sans-serif;

}
html {
  font-size: 62.5%;
}
`;

export default GlobalStyle;
