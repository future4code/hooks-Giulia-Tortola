import {useNavigate, useParams} from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
    navigate("/")}

    return (
        <><p>Login</p>
        <button onClick={goToHomePage}> Voltar</button>
        <button>Criar Viagem</button>
        <button> Detalhes das viagens</button>
        </>)
}

export default LoginPage