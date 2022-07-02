import {useNavigate, useParams} from "react-router-dom"
import { useProtectedPage } from "../hooks/ProtectedPage"
import Typography from "@mui/material/Typography"

const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
        navigate("/")}
    const goToCreateTrip = () => {
        navigate("/admin/trips/create")}
    return ( 
        <>
        <Typography variant="h1" color="primary">Criar viagem</Typography>
        <Typography variant="h2" color="secundary">Inscritos</Typography>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        </>
    )
}

export default TripDetailsPage