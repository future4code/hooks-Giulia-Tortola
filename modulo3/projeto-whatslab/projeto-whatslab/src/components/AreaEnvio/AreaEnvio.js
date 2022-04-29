import React from "react";
import styled from "styled-components";

class FormularioMensagem extends React.Component {
  state = {
    inputNome: "",
    inputMensagem: "",
    listaDeMesagens:[{
      Nome: "Giulia",
      Mensagem: "Oi, tudo bem?"
    }]
  }

  mudaNome = (event) => {
    this.setState({inputNome: event.target.value})
  }
  mudaMensagem = (event) => {
    this.setState({inputMensagem: event.target.value});
  };

  enviaMensagemNova = () => {
    const novaMensagem = {
      nome:this.state.inputNome,
      mensagem: this.state.inputMensagem
    }
    const novaListaDeMensagensRenderizada = [...this.state.listaDeMesagens]
    novaListaDeMensagensRenderizada.push(novaMensagem)

    this.setState({listaDeMesagensRenderizada: novaListaDeMensagensRenderizada})
  }

  render() {
    
  const listaDeMesagensRenderizada = this.state.listaDeMesagens.map((mensagem, index) => {
      return (
        <div key={index}>
          <p><strong>{mensagem.Nome}:</strong></p>
          <p>{mensagem.Mensagem}</p>
        </div>)
    })

    return (
      <div>
        {listaDeMesagensRenderizada}
        <hr />
        <input
          placeholder="Nome"
          value={this.state.inputNome}
          onChange={this.mudaNome}
        />
        <input
          placeholder="Mensagem"
          value={this.state.inputMensagem}
          onChange={this.mudaMensagem}
        />
        <button placeholder="Enviar" onClick={this.enviaMensagemNova}>Enviar</button>
      </div>
    );
  }
}

export default FormularioMensagem;
