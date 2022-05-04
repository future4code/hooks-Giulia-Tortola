import React from 'react';
import styled from 'styled-components';


class Etapa2 extends React.Component {
    render (){
        return (
            <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h4>5. Qual curso?</h4>
                <input placeholder='Curso'/>
            <h4>6. Qual a unidade de ensino</h4>
                <input placeholder='Unidade de Ensino'/>
            </div>
        )
        }
    }

export default Etapa2;