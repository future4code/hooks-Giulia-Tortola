import React from 'react';
import styled from 'styled-components';


class Etapa1 extends React.Component {
    render (){
        return (
            <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h4>1. Qual o seu nome?</h4>
                <input placeholder='Nome'/>
            <h4>2. Qual sua idade?</h4>
                <input placeholder='Nome'/>
            <h4>3. Qual seu e-mail?</h4>
                <input placeholder='Nome'/>
            <h4>4. Qual sua escolaridade?</h4>
            <select>
                <option value="Selecione">Selecione</option>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </select>
            </div>
        )
        }
    }

export default Etapa1;