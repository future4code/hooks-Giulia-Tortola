import React from "react";
import styled from "styled-components";

export const BoxAdd = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
width: 150px;
height: auto;
margin: auto;
background-color: gray;
border: 1PX solid black;
margin: 5px;
padding:10px;
.button {
  border-radius: 10px;
  padding: 10%;
}`

class AddSong extends React.Component {
  state={
    name:"",
    artist: "",
    url: ""
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }
  handleArtist = (e) => {
    this.setState({artist: e.target.value})
  }
  render() {
    return (
      <BoxAdd>
        <input placeholder="Nome da Música"/>
        <input placeholder="Artista/Banda"/>
        <input placeholder="Url da Música"/>
       <button>Adicionar música</button>
      </BoxAdd>
    );
  }
}

export default AddSong
;
