import React from "react";
import styled from "styled-components";
import AddSong from "./addSongToPlaylist";

export const DisplayDetalhes = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
width: 50%;
height: auto;
margin: auto;
border: 1px solid black;
`

class DetailsPlalist extends React.Component {
  render() {
    return (
      <DisplayDetalhes>
          <h1>Detalhes da Playlist</h1>
          <AddSong/>
      </DisplayDetalhes>
    );
  }
}

export default DetailsPlalist;
