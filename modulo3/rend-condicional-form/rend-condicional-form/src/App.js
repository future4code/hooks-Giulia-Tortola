import React from 'react';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Final from './components/Final/Final';
import { AppDad } from './components/Styled/Styled';

class App extends React.Component{
  state = {
    etapa:1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <div> <Etapa1/>
        <button onClick={this.irParaProximaEtapa}>PRÓXIMA ETAPA</button></div>;
      case 2: 
        return <div> <Etapa2/>
        <button onClick={this.irParaProximaEtapa}>PRÓXIMA ETAPA</button></div>;;
      case 3:
        return <div> <Etapa3/>
        <button onClick={this.irParaProximaEtapa}>PRÓXIMA ETAPA</button></div>;;
      case 4:
        return <Final/>;}
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
    }
 
  render() {
    return (
      <AppDad>
        {this.renderizaEtapa()}
      </AppDad>
    )
  }
 }

export default App;