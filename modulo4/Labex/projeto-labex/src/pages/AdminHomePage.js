import {useNavigate, useParams} from "react-router-dom"

const AdminHomePage = () => {
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
    navigate("/")}
    const  goToTripDetails = () => {
    navigate("/trip-details")}
    const  goToCreateTrip = () => {
    navigate("/create-trip")}

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