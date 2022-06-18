import {useNavigate, useParams} from "react-router-dom"

const TripDetailsPage = () => {
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
    navigate("/")}
    return ( 
        <>
        <p>Detalhes da Viagem</p>
        <button>Inscrição</button>
        <button onClick={goToHomePage}>Voltar</button>
        </>
    )
}

export default TripDetailsPage