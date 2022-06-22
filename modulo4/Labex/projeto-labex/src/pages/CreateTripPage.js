import { useProtectedPage } from "../hooks/ProtectedPage"

const CreateTripPage = () => {
    useProtectedPage()

    return (
        <p>Criar Viagem</p>
    )
}

export default CreateTripPage