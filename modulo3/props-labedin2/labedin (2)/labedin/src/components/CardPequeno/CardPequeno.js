import React from 'react';
import styled from 'styled-components';

export const SmallCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
export const SmallCard2 = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
export const SmallCard3 = styled.h4 `
    margin-bottom: 15px;`

function CardPequeno(props) {
    return (
        <SmallCard>
            <SmallCard2 src= {props.imagem} />
            <SmallCard3> {props.nome} </SmallCard3>
                <p>{props.descricao}</p>
        </SmallCard>
    )
}

export default CardPequeno;