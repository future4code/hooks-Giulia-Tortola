const ApplicationFormPage = () => {
    const navigate = useNavigate()   
    const params = useParams(); 
    const  goToHomePage = () => {
    navigate("/")}
    return (
        <>
        <p>Pagina de Inscrição</p>
        <button onClick={goToHomePage}>Voltar</button>
        <button>Increver-me</button>
        </>
    
    )
}

export default ApplicationFormPage