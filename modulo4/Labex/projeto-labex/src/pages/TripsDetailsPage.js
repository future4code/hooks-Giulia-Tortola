import {useNavigate, useParams} from "react-router-dom"

const TripDetailsPage = () => {
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
        navigate("/")}
    const goToCreateTrip = () => {
        navigate("/admin/trips/create")}
    return ( 
        <>
        <p>Detalhes da Viagem</p>
        <h2>Inscritos:</h2>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        </>
    )
}

export default TripDetailsPage