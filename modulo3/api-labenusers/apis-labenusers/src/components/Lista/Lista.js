import React from "react";
import axios from "axios";

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
    Authorization: "giulia-verruck-hooks"}
}
const getAllUsers = () => {
    axios
    .get (urlUsers, headers)
    .then((response)=> {
        this.setState({name: response.data.list})
    console.log (response.data)})
    .catch((error)=> {
    console.log(error)})
}

getAllUsers()
class Lista extends React.Component{
   render(){
    return(
    <div>
      <h1> Lista</h1>
      <button onClick={()=>{this.props.goBack("cadastro")}}>Cadastro</button>
    </div>

    )
  }
}
export default Lista;