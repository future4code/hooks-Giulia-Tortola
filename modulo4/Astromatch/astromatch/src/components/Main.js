import {FcLike, FcDislike} from "react-icons/fc";
import { MainContainer, ButtonContainer, ButtonLike, ButtonDislike, ProfileImage } from "./Styles";
import axios from "axios";
import { useEffect, useState } from "react";


const Main = () => {
    const [listaUsuarios, setListaUsuarios] = useState({})

    useEffect(() => {getProfile()}, []);

    const getProfile = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giulia-verruck-hooks/person')
        .then((res) => {
            setListaUsuarios(res.data.profile);
            console.log(res.data)
        })
        .catch ((err) => {
            console.log("Erro na API - Renderização")
        })
    }

    const getProfileToChose = () => {
        const body = {
            id: listaUsuarios.id,
            choice: true
          };
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giulia-verruck-hooks/choose-person',body)
        .then ((res)=> {
            getProfile();
            console.log("Deu Match?")
        })
        .catch ((err) => {
            console.log("Erro API - MATCH")
        })
    }

    const getNoProfileToChose= () => {
        const body = {
            id: listaUsuarios.id,
            choice: false
        } 
        axios
        .post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giulia-verruck-hooks/choose-person",body) 
        .then ((res) => {
            getProfile();
        })
        .catch((err) => {
            console.log('Erro API - RECUSAR')
        })
    }
    return(
        <MainContainer>
                <ProfileImage src={listaUsuarios.photo}></ProfileImage>
                <h1>{listaUsuarios.name}, {listaUsuarios.age}</h1>
                <h6>{listaUsuarios.bio}</h6>
            <ButtonContainer>
                <ButtonDislike onClick={() => getNoProfileToChose()}><FcDislike/></ButtonDislike>
                <ButtonLike onClick={() => getProfileToChose()}><FcLike/></ButtonLike>
            </ButtonContainer>
        </MainContainer>
        
    )
}

export default Main