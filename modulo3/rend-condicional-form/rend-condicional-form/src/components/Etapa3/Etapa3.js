import React from 'react';
import styled from 'styled-components';


class Etapa3 extends React.Component {
    render (){
        return (
            <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h4>5. Por que você não terminou um curso de gradução?</h4>
                <input placeholder='Motivo'/>
            <h4>6. Você fez algum curso complementar?</h4>
            <select>
                <option value="Selecione">Selecione</option>
                <option value="Curso Técnico">Curso Técnico</option>
                <option value="Curso de Inglês">Curso de Inglês</option>
                <option value="Não fiz curso complementar">Não fiz curso complementar</option>
            </select>
        
            
            
            </div>
        )
        }
    }

export default Etapa3;