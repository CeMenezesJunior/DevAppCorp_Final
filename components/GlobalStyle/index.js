import{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff5555;
  }
  * {
    font-family: sans-serif;
    color: #333;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #FFFFFF;
    margin: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: #ff5555;
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  p{
    color: #f8f8f2;
  }
  .postsContainer {
    margin-left: 40%;
    text-align: center;
    width: 300px;
  }
  .postsContainer__post {
    border: 3px solid #ffb86c;
    width: 300px;
    margin-bottom: 15px;
    text-align: center;
    a {
      font-weight: bold;
    }
    p{
      color: #f8f8f2;
      margin-bottom: 20px;
    }
  }
  .biografia{
    margin-bottom: 110px;
    margin-left: 20px;
  }
  .botaoPrincipal{
    padding: 10px 20px 10px 20px;
    border: 1px solid red;
    background-color: red;
    color: white;
    border-radius: 10%;
  }
  .descricao{
    margin-left: 10%;
  }
  .headerContainer {
    position: relative;
    margin-left: 40%;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 20px;
    img {
      margin-left: 100px;
      max-width: 100px;
      border-radius: 100%;
      margin-right: 16px;
    }
    a {
      margin-left: 100px;
    }
  }
  .imagemPerfil{
    max-width: 100px;
    border-radius: 100%;
    margin-right: 16px;
  }
  .linkContainer{
    display: flex;
    
    a{
      position: relative;
      left: 45%;
      margin-right: 15px;
    }
  }
  .footer{
    align-items: center;
    background-color: white;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
  .video-responsive{
    overflow: hidden;
    padding-bottom: 40%;
    
    position: relative;
    height: 0;
  }
  .video-responsive iframe{
    left: 22%;
    top: 0;
    height: 100%;
    weight: 100%;
    position: absolute;
    margin-bottom: 40%;
  }
`;

export default GlobalStyle;