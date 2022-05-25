import React from "react";
import axios from "axios";

class Lista extends React.Component{
  state= {
    newUsers: []
  }
  componentDidMount () {
    this.getAllUsers()
  }
 getAllUsers = () => {
  
    const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
    const headers = {
        headers: {
          Authorization: "giulia-verruck-hooks"}
    }
        axios
        .get (urlUsers, headers)
        .then((response)=> {
          this.setState({newUsers: response.data})
          console.log (response.data)})
        .catch((error)=> {
          console.log(error)})
    }

  deleteUser = (id) => {
     
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    
    const headers = {
        headers: {
          Authorization: "giulia-verruck-hooks"}
  }
  axios.delete(url, headers)
    .then((response)=> {
     alert("O Usuário foi deletado!")
     this.getAllUsers()
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
}
    
   
   render() {
    const usuarios = this.state.newUsers.map((usuario) => {
      return (
        <div key={usuario.id}>
          {usuario.name}
          <button onClick={ () => this.deleteUser(usuario.id)}>X</button>
        </div> 
      )
    })

    return(
      <div>
        <button onClick={()=>{this.props.goBack("cadastro")}}>ir para Cadastro</button>
        <h1> Lista</h1>
        {usuarios}
      </div>

    )
  }
}
export default Lista;