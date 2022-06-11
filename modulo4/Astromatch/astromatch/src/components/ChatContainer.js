import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState, useEffect } from "react"
import { MainContainer } from "./Styles"
import styled from "styled-components";

const MatchesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  flex-wrap: wrap;
  margin: 5px;
  padding: 2px;
  border-radius: 19px 19px 19px 19px;
-moz-border-radius: 19px 19px 19px 19px;
-webkit-border-radius: 19px 19px 19px 19px;`

const MatchImg = styled.img`
width: 50px;
height: 50px;
border-radius: 200px;`

const FundoBranco = styled.div`
background-color: white;
border-radius: 19px 19px 19px 19px;
-moz-border-radius: 19px 19px 19px 19px;
-webkit-border-radius: 19px 19px 19px 19px;`

const ChatContainer = () => {
    const [listaMatches, setListaMatches] = useState([])

    const getMatches = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giulia-verruck-hooks/matches')
        .then((res) => {
            setListaMatches(res.data.matches)
            console.log("renderizou os matches?", res.data.matches)
        })
        .catch((err) => {
            console.log("Erro na API - Renderização")
        })
    }

    useEffect (() => {getMatches()},[]);

    const deleteMatches = () => {
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giulia-verruck-hooks/clear')
        .then (() => {
            alert("Lista de Matches limpa!");
        })
        .catch ((err) => {
            alert("Erro apagar")
        })
    }
    
    const renderedMatches = listaMatches.map((match) => {
        return <MatchesContainer
                key={match.id}>
                <MatchImg src={match.photo}/>
                <h3>{match.name}</h3>
            </MatchesContainer>
    })
    return (
        <MainContainer>
            <FundoBranco>
            {renderedMatches}</FundoBranco>
            <button onClick={() => deleteMatches()}>Limpar Matches</button>
        </MainContainer>
    )
}

export default ChatContainer