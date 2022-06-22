import {useNavigate, useParams} from "react-router-dom"

const HomePage = () => {
const navigate = useNavigate()   
const params = useParams(); 
const  goToLogin = () => {
    navigate("/login")}
const  goToListTrips= () => {
    navigate("/trips/list")}
    return (
        <div>
        <p>Home</p>
        <button onClick={goToLogin}>Sou Administrador</button>
        <button onClick={goToListTrips}> Quero conhecer as viagens</button>
        </div>
    )
}

export default HomePage