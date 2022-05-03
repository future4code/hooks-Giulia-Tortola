import React from 'react';
import styled from 'styled-components';
import Formulario from './components/Chat/Chat';

export const HeaderVerde = styled.header `
background-color: green;
width: 60%;
align-self: center;
color: white;
margin: auto;
text-align: center;
border: 3px solid black;
`

export const ParteEnvio = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
`

export const CaixaGrande = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-image: url(https://i.pinimg.com/originals/8e/6b/e9/8e6be91a01ba06f18b9eddfb944b2b42.jpg);`

export const Flex = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
border: 3px solid black;
`


function App (){
  return (
    <div>
     <HeaderVerde>WhatsLab</HeaderVerde>
     <CaixaGrande>
     <Formulario/></CaixaGrande>
    </div>     
  )
}

export default App;