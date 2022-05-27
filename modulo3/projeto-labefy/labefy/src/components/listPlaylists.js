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
flex-grow: 2;
`

class ListPlaylists extends React.Component {
 
    state = {
      listaPlayists: [],
      playlistId: "",
      playlistName: "",
    }

    componentDidMount () {
      console.log ("Montou a bagaça?")
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
          console.log("Deu?")
        })
        .catch((error)=> {
          alert("Algo deu errado!")
        })
    }
     render() {
    return (
      <DisplayFlex>
        <h1>Playlists</h1>

     </DisplayFlex>
    );
  }
}

export default ListPlaylists;
