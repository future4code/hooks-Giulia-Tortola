import React from "react";
import { List } from "./components/createPlaylist";
import { CreatePlayList } from "./components/createPlaylist";
import DetailsPlalist from "./components/detailsPlaylist";
import styled from "styled-components";

export const Cabecalho = styled.div`
background-color: black;
color: orange;
height: 10vh;
font-size: 10vh;
`

export const Main = styled.div `
background-color: orange;
height: 100vh;
display: flex;
flex-direction: row;


`
export const Footer = styled.div `
background-color: gray;
height: 5vh;
color:white;
text-align: center;`


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Cabecalho>Labefy</Cabecalho>
        <Main>
          <DetailsPlalist/>
          <List/>
        </Main>
       <Footer>Desenvolvido por Giulia Verruck | 2022</Footer>
      </div>
    );
  }
}

export default App;
