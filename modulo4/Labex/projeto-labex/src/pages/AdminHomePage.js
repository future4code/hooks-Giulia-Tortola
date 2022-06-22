import axios from "axios";
import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useProtectedPage } from "../hooks/ProtectedPage"

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
    navigate("/trips/create")}

    return (
        <>
        <p>Admin Home</p>
        <button onClick={goToHomePage}>Logout</button>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        <button onClick={goToTripDetails}>Detalhes das Viagens</button>
        </>
    )
}

export default AdminHomePage