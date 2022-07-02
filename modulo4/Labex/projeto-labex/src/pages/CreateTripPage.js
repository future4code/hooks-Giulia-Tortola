import { useProtectedPage } from "../hooks/ProtectedPage"

import { BodyContainer } from "../styles/styles"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ButtonAppBarLog from "../styles/components/HeaderLogged"


const CreateTripPage = () => {
    useProtectedPage()

    return (
        <>
        <ButtonAppBarLog/>
        <BodyContainer>
        <Typography variant="h1" color="primary">Criar viagem</Typography>
        <input 
          name={"name"}
          placeholder="Nome"
          required/>
        <select>
        <option>Selecione</option>
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>
        <option>Urano</option>
        <option>Netuno</option>
        </select>
        <input
          name={"date"}
          placeholder="Data"
          required
          type="date"
          />
        <input
         name={"description"}
         placeholder="Descrição"
         required
         />
      
        
        <Button variant="contained" color="success" >Criar Viagem</Button>

        </BodyContainer>
        </>
    )
}

export default CreateTripPage