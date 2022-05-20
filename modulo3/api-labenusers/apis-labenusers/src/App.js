import React from "react";
import axios from "axios";
import Lista from "./components/Lista/Lista";
import Cadastro from "./components/Cadastro/Cadastro";


class App extends React.Component{
  state = {
    renderPage: "cadastro"
  }
  changePage = () => {
    if (this.state.renderPage === "cadastro"){
      return <Cadastro goBack={this.goBack}/> }
      else if (this.state.renderPage === "lista"){
        return <Lista goBack={this.goBack}/>
      }
  }

  goBack = (renderPage) => {
    this.setState({renderPage: renderPage})
  }
  
  render(){
    return(
    <div>
     {this.changePage()}
    </div>

    )
  }
}
export default App;