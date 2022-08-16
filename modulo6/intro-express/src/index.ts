import express from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => console.log ("O servidor está online na porta 3003"))

app.use(express.json());

//Ex 1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})
//Ex 2
 type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
 }
//Ex 3 
 const users: User[] = [
    {
        id: 1,
    name: "Giulia",
    phone: 1218205616,
    email: "giulia@mail.com",
    website: "www.giulia.com.br"
    },
    {
        id: 2,
    name: "Victoria",
    phone: 12587416,
    email: "victoria@mail.com",
    website: "www.victoria.com.br"
    },
    {
        id: 3,
    name: "Rafa",
    phone: 4188525616,
    email: "rafa@mail.com",
    website: "www.rafa.com.br"
    },
    {
        id: 4,
    name: "Nathalia",
    phone: 58581616,
    email: "nathalia@mail.com",
    website: "www.nathalia.com.br"
    }
 ]

 //Ex 4
 app.get("/users", (req, res) => {
       res.status(201).send(users)
  }) 

//EXERCICIO 5 


type Posts = {
    id: number,
    title: string,
    body: string| number,
    userId: number
}

//Ex 6

const postsData:Posts[] = [
	{ id: 1, title: "AAAA", body: "lavar a alma", userId: 1,  },
    { id: 2, title: "BBB", body: "cantando pois faz bem", userId:2, },
	{ id: 3, title: "CCC", body: "tocar cavaquinho", userId: 1, },
	{ id: 4, title: "FFF", body: "o código dará certo", userId: 2, },
    { id: 5, title: "GGG", body: "pensando na vida", userId: 2, },
]

//Ex 7

app.get("/posts", (req, res) => {
    if(!postsData.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(postsData)
    console.log("b",postsData)
})  

//Ex 8

app.get("/users/posts", (req, res) => {

    if(req.query.userId){
        console.log(req.query)

        const filteredId = postsData.filter((prop)=>{
            return prop.userId === Number(req.query.userId)

        })
        res.status(201).send(filteredId)

    }else{
        res.status(400).end()
    }

})
