import axios from "axios";
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react";

const ListTripsPage = () => {
const navigate = useNavigate()   
const params = useParams(); 
const  goToApplication = () => {
    navigate("/trips/application")}
const [listTrips, setListTrips] = useState ([])

useEffect(() => {getTrips()}, []);

const getTrips = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/giulia-verruck-hooks/trips")
    .then ((res)=> setListTrips(res.data.trips))
    .catch ((err)=> console.log(err.message))
}
const renderTrips = listTrips.map(trips => {
    return <div key={trips.id}>
        <h2>{trips.name}</h2>
        <p>Descrição: {trips.description}</p>
        <p>Local: {trips.durationInDays}</p>
        <p>Data: {trips.date}</p>
        <button onClick={goToApplication}>Inscrever-me</button>
    </div>})

    return (
        <>
        <p>Lista de Viagens</p>
        <div>{renderTrips}</div>
        </>
    )
}

export default ListTripsPage