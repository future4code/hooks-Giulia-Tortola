import axios from "axios";
import React from "react";
import styled from "styled-components";

export const DisplayFlex = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
width: 25%;
height: auto;
margin: auto;
border: 1px solid black;
.button {
    border-radius: 10px;
}
`

export class List extends React.Component {
  state={
    nomePlaylist: "",
    playlists: [],
    playlistId: "",
  }
  componentDidMount() {
    this.pegarListas()
  }
  pegarListas = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const header = {
      headers: {
        Authorization: "giulia-verruck-hooks"
      }
    }

    axios.get(url, header)
      .then((response) => {
        this.setState({listaPlayists: response.data.result.list})
        console.log("Deu pra pegar?")
      })
      .catch((error)=> {
        alert("Algo deu errado!")
      })
    }
  criarPlaylist = () => {
  const urlCriar = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    
  const body = {
    name: this.state.nome,
    }
  const header = {
    headers: {
      Authorization: "giulia-verruck-hooks"
      }
  }
  axios.post(urlCriar, body, header)
    .then ((response) => {
            alert (`Playlist ${this.state.nome}criada com sucesso!`)
            this.setState({nome:""})
          }).catch ((error)=> {
            alert (error.response.data.message)
            this.setState({nome:""})
            console.log("Ocorreu um erro, a Playlist não foi criada")
          })
      }

  handleNamePlaylist = (event) => {
    this.setState ({nomePlaylist: event.target.value})
  }
  render() {
    const listaRenderizada =  this.state.playlists.map ((item)=> {
      return <il key={item.id} name={item.name}/>
    })
    return (
      <DisplayFlex>
          <h1>Crie aqui sua playlist!</h1>
          <input 
          placeholder="Nome da Playlist"
          value={this.state.nomePlaylist}
          onChange={this.handleNamePlaylist}/>
          <div playlists={this.state.playlists}
          listaRenderizada={listaRenderizada}/>
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
      </DisplayFlex>
    );
  }
}
