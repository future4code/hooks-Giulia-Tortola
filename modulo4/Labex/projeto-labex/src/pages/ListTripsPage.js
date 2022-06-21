import {useNavigate, useParams} from "react-router-dom"

const ListTripsPage = () => {
const navigate = useNavigate()   
const params = useParams(); 
const  goToApplication = () => {
    navigate("/trips/application")}
    return (
        <>
        <p>Lista de Viagens</p>
        <button onClick={goToApplication}>Inscrição</button>
        </>
    )
}

export default ListTripsPage