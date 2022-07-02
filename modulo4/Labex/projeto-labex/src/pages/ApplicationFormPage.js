import {useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import Typography from "@mui/material/Typography"

const ApplicationForm = () => {
  const name = localStorage.getItem("name")
  const idTrips = localStorage.getItem("id")
  const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession:"",
        contry:""
      })
      const [countries, setCountries] = useState([]);

      const getCountries = () => {
        axios
          .get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")
          .then((res) => {console.log(res);setCountries(res.data);});
      };
    
     useEffect(() => {getCountries()}, []);
    const navigate = useNavigate()   
    
    const getApplyTrips = (id) => {
      const body = {
        name: nameUser,
        age: age,
        applicationText: applicationText,
        profession: profession,
        country: country
      }
      axios 
      .post (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giulia-verruck-hooks/trips/${id}/apply`)
      .then ((res) => {
        alert("Inscrição concluída!")})
      .catch((err)=>{console.log(err.data)})
    }
    const  goToHomePage = () => {navigate("/")}

    return (
        <>
        <ButtonAppBar/>
        <Typography variant="h1" color="primary">Inscrição</Typography>
        <form>
        <input 
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required/>
          <input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}/>
        <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Porque sou um bom candidato?"
          required
          />
        <input
         name={"profession"}
         value={form.profession}
         onChange={onChange}
         placeholder="Profissão"
         required
         />
        <select>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.nome}>
              {country.nome}
            </option>
          );
        })}
      </select>
        </form>
        <Button onClick={()=>getApplyTrips(idTrips)}>Increver-me</Button>
        
        </>
    
    )
}
export default ApplicationForm