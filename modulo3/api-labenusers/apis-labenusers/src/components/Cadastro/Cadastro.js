import React from "react";
import axios from "axios";


const urlLbnApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization:'giulia-verruck-hooks'}
  }

class Cadastro extends React.Component{
  state = {
    newUsers: [],
    inputNameUser: "",
    inputMailUser:"",
  }

  createUser = () => {
    const body = {
      name: this.state.inputNameUser,
      email: this.state.inputMailUser,
    }
    axios.post(urlLbnApi, body, headers)
    .then((res) => {
      alert(`Usuario ${this.state.inputNameUser} criado com sucesso!`)
      this.setState({inputNameUser: ""})
      this.setState({inputMailUser: ""})
    })
    .catch((err)=>{
      console.log("Nada foi criado!")
      this.setState({inputNameUser: ""})
      this.setState({inputMailUser: ""})
    })
  }

  onCreateUser = (e) => {
    this.setState({inputNameUser: e.target.value})
  }
  onCreateUserMail = (e) => {
    this.setState({inputMailUser: e.target.value})
  }
  render(){
    return(
    <div>
        <h1>Cadastro</h1>
      <input onChange={this.onCreateUser} value={this.state.inputNameUser} placeholder="Nome"/>
      <input onChange={this.onCreateUserMail} value={this.state.inputMailUser} placeholder="E-mail"/>
      <button onClick={this.createUser}>Cadastrar</button>
      <button onClick={() => {this.props.goBack("lista")}}>Lista</button>
      </div>

    )
  }
}
export default Cadastro;