import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

type User = {
    name: string,
    CPF: string,
    nascimento: string,
    saldo: number,
    gastos: Extrato[]
}

const clients: User[] = [
    {
        name: "Giulia",
        CPF: '07289666285',
        nascimento: "14/06/1996",
        saldo: 100,
        gastos: [{
            valor: 50,
            data: "20/08/2022",
            descricao: "Pagamento empréstimo"
        }]
    }
]

app.get('/clients/:cpf/:name', (req, res) => {
    try {
        const cpf = req.params.cpf
        const name = req.params.name

        if (!cpf || !name) {
            throw new Error('CPF ou Nome inválido, digite um valor válido!')
        }
        for (const client of clients) {
            if (client.name === name) {
                if (client.CPF === cpf) {
                    return res.send(`Saldo: R$' ${client.saldo}`)
                }
                else {
                    throw new Error('CPF não encontrado')
                }
            } else {
                throw new Error('Nome não encontrado')
            }
        }
    } catch (error: any) {
        console.log(error.message)
    }

})

app.put('/clients/addSaldo/:novoSaldo', (req, res) => {
    try {
        const cpf = req.body.cpf
        const name = req.body.name
        const novoSaldo = Number(req.params.novoSaldo)

        if (!cpf || !name || !novoSaldo) {
            throw new Error('CPF, Saldo ou Nome inválido, digite um valor válido!')
        }
        for (const client of clients) {
            if (client.name === name) {
                if (client.CPF === cpf) {
                    client.saldo = client.saldo + novoSaldo
                    return res.send(`Saldo: R$' ${client.saldo}`)
                }
            }
        }
        throw new Error("CPF ou Nome inválido, digite um valor válido!")
    } catch (error: any) {
        console.log(error.message)
    }

})

app.post('/clients/criar', (req, res) => {
    try {
        const idade = Number(req.body.nascimento)
        if (idade < 18) {
            throw new Error('É preciso ter mais de 18 anos para abrir uma conta!')
        }
        const name = req.body.name
        const CPF = req.body.CPF
        const saldo = req.body.saldo
        if (!name || !CPF || !saldo) {
            throw new Error('CPF, Saldo ou Nome inválido, digite um valor válido!')
        }
        for (const client of clients) {
            if(client.CPF===CPF){
                throw new Error('CPF já cadastrado')
            }
        }
        const newUser: User = {
            name,
            CPF,
            nascimento: req.body.nascimento,
            saldo,
            gastos: []
        }

        clients.push(newUser)

        res.send('Usuario criado' + clients)
    } catch (error: any) {
        console.log(error.message)
    }
})

app.post('/clients/pagar/:cpf', (req, res) => {
    try {
        const dataDePagamento = req.body.dataDePagamento
        if (dataDePagamento < 2022) {
            throw new Error('A data de pagamento não pode ser anterior ao dia de hoje!')
        }

        const descricao = req.body.descricao
        const valor = Number(req.body.valor)
        const CPF = req.params.cpf

        if (!dataDePagamento || !valor || !descricao || !CPF) {
            throw new Error('Data de Pagamento, valor ou CPF inválido. Digite um valor válido!')
        }

        const newGasto: Extrato = {
            valor,
            data: dataDePagamento,
            descricao
        }

        for (const client of clients) {
            if (client.CPF === CPF) {
                if (client.saldo < valor) {
                    throw new Error('Você não tem saldo insuficiente!')
                }
                client.gastos.push(newGasto)
                client.saldo = client.saldo - valor
                return res.send(`Pagamento realizado com sucesso, seu novo saldo é R$" ${client.saldo}`)
            }
        }

        throw new Error("Cliente não encontrado!")

    } catch (error: any) {
        console.log(error.message)
    }
})

app.post('/clients/transferencia', (req, res) => {
    try {
        const remetente = req.body.nameDoRemetente
        const destinatario = req.body.nameDoDestinatario
        const remetenteCPF = req.body.remetenteCPF
        const destinatarioCPF = req.body.destinatarioCPF
        const valor = req.body.valor
        let indiceRemetente: number|undefined = undefined

        if (!remetente || !destinatario || !remetenteCPF || !destinatarioCPF || !valor) {
            throw new Error('CPF ou Nome inválido do destinatário ou remetente, digite um valor válido!')
        }

        for(let i = 0; i<clients.length;i++){
            if(clients[i].name===remetente){
                if(clients[i].CPF===remetenteCPF){
                    indiceRemetente = i
                    clients[i].saldo = clients[i].saldo - valor
                }
            }
        }
        if(!indiceRemetente){
            throw new Error('Remetente nao encontrado')
        }
        for(let i = 0; i<clients.length;i++){
            if(clients[i].name===destinatario){
                if(clients[i].CPF===destinatarioCPF){
                    clients[i].saldo = clients[i].saldo + valor
                    return res.send("Transferência realizada com sucesso!")
                }
            }
        }
        clients[indiceRemetente].saldo += valor
        throw new Error('Destinatário não encontrado')
    } catch (error: any) {
        console.log(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor disponivel em 3003")
})