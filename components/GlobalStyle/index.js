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
    background-color: #282a36;
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
  .detalheContainer{
    text-align: center;
    padding: 20px;
    p{
      font-weight: bold;
    }
  }

  .postsContainer {
    margin-left: 38%;
    text-align: center;
    width: 300px;
    padding: 10px;
  }
  .postsContainer__post {
    border: 1px solid red;
    width: 300px;
    margin-bottom: 15px;
    text-align: center;
    padding: 10px;
    a {
      font-weight: bold;
    }
    p{
      color: white;
      margin-bottom: 20px;
    }
  }
  .biografia{
    margin-bottom: 110px;
    margin-left: 20px;
  }
  .botaoDeletar{
    padding: 10px 20px 10px 20px;
    border: 1px solid red;
    background-color: red;
    color: white;
    border-radius: 10%;
  }

  .formsContainer{
    text-align: left;
    border: 1px solid black;
    width: 500px;
    margin-left: 30%;
    label{
      color: white;
    }
    input{
      display: flex;
      flex-direction: column-reverse;
      position: relative;
      margin-top: 10px;
      width: 98%;
    }
    textarea{
      margin-top: 10px;
      width: 98%;
      height: 100px;
    }
  }

  .botoesLista{
    display: flex;
    flex-direction: row;
    margin-left: 20%;
  }

  .botaoPrincipal{
    padding: 10px 20px 10px 20px;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    border-radius: 10%;
  }

  .botaoCriar{
    padding: 10px 20px 10px 20px;
    border: 1px solid yellow;
    background-color: yellow;
    color: red;
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