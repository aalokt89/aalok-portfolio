import { injectGlobal } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body{
//     margin: 20px;
//   }
// `;
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700|Montserrat:400,700');
  html{
    font-size: 62.5% !important;
  }
  body{
    font-family: Montserrat, -apple-system, helvetica, Roboto, sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
    margin: 0 !important;
    padding:0;
  }

  h1, h2, h3, h4, h5 {
    font-family: Lora, Montserrat, -apple-system, Helvetica, Roboto;
    font-weight: 700;
    margin-bottom: 1.6rem;
  
  }
`;
