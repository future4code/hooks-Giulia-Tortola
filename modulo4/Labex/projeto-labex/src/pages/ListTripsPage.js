import axios from "axios";
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react";
import { CardTrip } from "../styles/styles";
import Button from '@mui/material/Button';
import ButtonAppBar from "../styles/components/Header";
import Paper from '@mui/material/Paper';
import { BodyContainer2 } from "../styles/styles";
import Typography from "@mui/material/Typography"

const ListTripsPage = () => {
const navigate = useNavigate()   
const params = useParams(); 
const [listTrips, setListTrips] = useState ([])
const [idTrips, setIdTrips] = useState([])

useEffect(() => {getTrips()}, []);

const getApplyTrips = (id) => {
    if(id === trips.id){
        navigate("/trips/application")
        localStorage.setItem("id", trips.id)
        localStorage.setItem("name", trips.name)
    }
}

const getTrips = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/giulia-verruck-hooks/trips")
    .then ((res)=> setListTrips(res.data.trips))
    .catch ((err)=> console.log(err.message))
}
const renderTrips = listTrips.map(trips => {
    return <CardTrip key={trips.id}>
        <h2>{trips.name}</h2>
        <p>Descrição: {trips.description}</p>
        <p>Local: {trips.durationInDays}</p>
        <p>Data: {trips.date}</p>
        <Button color="success" variant="contained" onClick={()=> getApplyTrips()}>Inscrever-me</Button>
    </CardTrip>})

    return (
        <>
        <ButtonAppBar/>
        <BodyContainer2>
        <Typography variant="h1" color="primary">Lista de viagens</Typography>
        <Paper elevation={3} />{renderTrips}<Paper/></BodyContainer2>
        <Button > Voltar</Button>
       
        </>
    )
}

export default ListTripsPage