import axios from "axios";
import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useProtectedPage } from "../hooks/ProtectedPage"
import ButtonAppBarLog from "../styles/components/HeaderLogged";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography"
import { BodyContainer } from "../styles/styles";


const AdminHomePage = () => {
    useProtectedPage();
    useEffect(() => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giulia-verruck-hooks/trips"
        const header= {headers: {auth: localStorage.getItem("token")}}
    
    axios
    .get(URL, header)
    .then((res) => {console.log(res.data)})
    .catch((err)=>{console.log})
},[])

    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
    navigate("/")}
    const  goToTripDetails = () => {
    navigate("/trips")}
    const  goToCreateTrip = () => {
    navigate("/admin/trips/create")}

    return (
        <>
        <ButtonAppBarLog/>
        <BodyContainer>
        <Typography variant="h1" color="primary">Área do Administrador</Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="contained" onClick={goToCreateTrip}>Criar Viagem</Button>
        <Button variant="contained" onClick={goToTripDetails}>Detalhes das Viagens</Button>
        </ButtonGroup></BodyContainer>
        </>
    )
}

export default AdminHomePage