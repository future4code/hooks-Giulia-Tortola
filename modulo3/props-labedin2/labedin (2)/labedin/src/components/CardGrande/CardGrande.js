import React from 'react';
import styled from 'styled-components';

export const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    img{
        width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }
    h4{
        margin-bottom: 15px;
    }
`

function CardGrande(props) {
    return (
        <BigCard>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;