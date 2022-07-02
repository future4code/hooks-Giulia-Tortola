import {useNavigate, useParams} from "react-router-dom"
import { ContainerTittle, BodyContainer } from "../styles/styles";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import ButtonAppBar from "../styles/components/Header";

const HomePage = () => {
const navigate = useNavigate()   
const params = useParams(); 

const  goToListTrips= () => {
    navigate("/trips/list")}
    return (
        <div>
        <ButtonAppBar/>
        <BodyContainer>
        <Typography variant="h2" color="primary">Infinitas possibilidades</Typography>
           <Button variant="contained" onClick={goToListTrips}>Quero conhecer as viagens agora!</Button>
        </BodyContainer>
        
        </div>
    )
}

export default HomePage