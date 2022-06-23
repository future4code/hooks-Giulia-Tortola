import {useNavigate, useParams} from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"

const LoginPage = () => {
    const [form, setForm] = useState({email: "", password: ""})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()   
    const params = useParams(); 

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)}

    const onChangePassword = (e) => {
        setPassword(e.target.value)}

    const  goToHomePage = () => {
        navigate("/")}
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
        <><p>Login</p>
        <button onClick={goToHomePage}> Voltar</button>
        <input
         placeholder="email"
         type="email"
         value={form.email}
         onChange={onChangeEmail}/>
        <input 
         placeholder="senha"
         type="password"
         value={form.password}
         onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>logar</button>
       
        
        </>)
}

export default LoginPage