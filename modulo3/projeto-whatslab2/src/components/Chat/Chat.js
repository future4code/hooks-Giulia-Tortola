import React from 'react'
import styled from 'styled-components';

export const Caixa = styled.div`
margin: 2px;
color: black;
border: 1px solid white;
background-color: white;
width: 50vw;
border-radius: 5px;
margin: auto;
align-items:center;`

export const Envio = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: stretch;
align-self: center;
margin: auto;
width: 50vw;
align-items:center;
  input,button{
    border-radius: 10px;
  }
  
`

class Formulario extends React.Component {
  state = {
    inputNome: '',
    inputMensagem: '',
    chatMensagens: [{nome: "Giulia",
       mensagem: "Oi, tudo bem?"},
      {nome: "Eu",
       mensagem: "Tudo sim, e contigo?"},
      {nome: "Teste",
        mensagem: "Cansada de react!"}]
    }
 
// Funções para ensinar os inputs a alterarem os estados
 mudaNome = (event) => {
    this.setState({inputNome: event.target.value})
    }

 mudaMensagem = (event) => {
    this.setState({inputMensagem: event.target.value})
    }

// Função para enviar nova mensagem
  enviaMensagem = () => {
// criação de objeto para guardar as novas mensagens digitadas no input
    const novaMensagem = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem}

// criação de um novo array, que tem a cópia do estado + o objeto novaPessoa
    const novaListaMensagens = [...this.state.chatMensagens]
    novaListaMensagens.push(novaMensagem)
// alteração do valor do estado para o novo array criado acima
    // this.setState({ listaMensagens: novaListaMensagens })
}
  render() {
// map da lista de novas mensagens para elementos visuais
   let chatmensagensRender = this.state.chatMensagens.map((chat,index) => {
      return (
        <div key={index}>
            <p><strong>{chat.nome}:</strong>{chat.mensagem}</p>
        </div>
        )
    })

// JSX do componente Formulario
    return (
      <div>
        <Caixa>
          {chatmensagensRender}
        </Caixa>
        <Envio>
        <input placeholder="Nome" value={this.state.inputNome} onChange={this.mudaNome} />
        <input placeholder="Mensagem" value={this.state.inputMensagem} onChange={this.mudaMensagem} />
        <button onClick={this.enviaMensagem}>Enviar</button>
        </Envio>
      </div>
    )
  }
}

export default Formulario


// import React from 'react';
// import styled from 'styled-components';
// import { InputMensagem } from '../Inputs/Mensagem/InputMensagem';
// import { InputNome } from '../Inputs/Nome/InputNome';


// export const Caixa = styled.div`
// display: flex;
// flex-direction: column-reverse;
// align-items: flex-start;
// width: 60vw;
// border: 2px solid black;
// height: 95vh;
// margin: auto;
// text-align: center;
//     p{color: black;
// border: 1px solid white;
// background-color: white;
// width: 100%;
// border-radius: 5px;}
// `
// export class BoxChat extends React.Component {
//     state = {
//         chatmensagens: [
//             {nome: "Giulia",
//             mensagem: "Oi, tudo bem?"},
//             {nome: "Eu",
//             mensagem: "Tudo sim, e contigo?"}
//         ]
//     }

  
//     }
//     chatmensagensRender = this.state.chatmensagens.map((chat,index) => {
//         return (
//             <div key={index}>
//                 <p><strong>{chat.nome}:</strong>  {chat.mensagem}</p>
//             </div>
//         )
//     })

//     render() {

//     return(
//         <div>
//             <Caixa>
//                 {this.chatmensagensRender}

//             </Caixa>
//         </div>
    
//     )
//     }
// }