import {useNavigate, useParams} from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"
import Button from '@mui/material/Button';
import ButtonAppBar from "../styles/components/Header";
import TextField from '@mui/material/TextField';
import { BodyContainer } from "../styles/styles";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()   
    const params = useParams(); 

    const onChangeEmail = (e)=>{setEmail(e.target.value)}

    const onChangePassword = (e) => {setPassword(e.target.value)}

    const  goToHomePage = () => {navigate("/")}
    const onSubmitLogin = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giulia-verruck-hooks/login"
        const body = {
            email: email,
            password:password
        }
     axios.post(url, body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            navigate("/admin/trips/list")})
        .catch((err)=>{alert("Usuário não encontrado!")})
    }

    return (
        <><ButtonAppBar/>
        
        <BodyContainer>
        <Typography variant="h1" color="primary">Login</Typography>
        <Button onClick={goToHomePage}> Voltar</Button>
        <TextField
         placeholder="emaIl"
         type="email"
         value={email}
         onChange={onChangeEmail}/>
        <TextField 
         placeholder="senha"
         type="password"
         value={password}
         onChange={onChangePassword}
        />
        <Button variant="contained" onClick={onSubmitLogin}>logar</Button>
       </BodyContainer>
        
        </>)
}

export default LoginPage