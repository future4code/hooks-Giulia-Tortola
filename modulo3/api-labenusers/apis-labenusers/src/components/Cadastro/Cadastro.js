import React from "react";
import axios from "axios";

class Cadastro extends React.Component{
  state = {
    newUsers: [],
    nome: "",
    email:"",
  }

  onCreateUser = (e) => {
    this.setState({nome: e.target.value})
  }
  onCreateUserMail = (e) => {
    this.setState({email: e.target.value})
  }
  createUser = () => {
    const urlLbnApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email,
    }
    const headers = {
      headers: {
      Authorization: "giulia-verruck-hooks"
      }
    }

    axios.post(urlLbnApi, body, headers)
    .then((response) => {
      alert(`Usuario ${this.state.nome} criado com sucesso!`)
      this.setState({nome: "", email: ""})
     
    })
    .catch((error)=>{
      console.log("Nada foi criado!")
      this.setState({nome: "", email: ""})
     
    })
  }

  
  render(){
    return(
    <div>
      <button onClick={() => {this.props.goBack("lista")}}>ir para Lista</button>
        <h1>Cadastro</h1>
      <input 
        onChange={this.onCreateUser} 
        value={this.state.nome} 
        placeholder="Nome"
      />
      <input 
        onChange={this.onCreateUserMail} 
        value={this.state.email} 
        placeholder="E-mail"
      />
      <button onClick={this.createUser}>Cadastrar</button>
      
      </div>

    )
  }
}
export default Cadastro;