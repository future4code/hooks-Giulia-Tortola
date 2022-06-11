import styled from "styled-components";

export const BoxStyled = styled.div `
width: 30vw;
height: 80vh;
background-color: #e9a2ad;
border-radius: 19px 19px 19px 19px;
-moz-border-radius: 19px 19px 19px 19px;
-webkit-border-radius: 19px 19px 19px 19px;
border: 0px outset #000000;
-webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.34);
-moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.34);
box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.34);
margin: auto;`

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 60vh; 
width: auto;
margin: auto;
justify-content: space-around;
align-items: center;
`

export const ButtonContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const ButtonLike = styled.button`
background-color: #1aae9f;
border-radius: 200px;
width: 70px;
height: 70px;
`
export const ButtonDislike = styled.button`
background-color: #d4465e;
border-radius: 200px;
width:70px;
height: 70px;
`
export const ProfileImage = styled.img`
width: 15em;
height: 15em;
border-radius: 19px 19px 19px 19px;
-moz-border-radius: 19px 19px 19px 19px;
-webkit-border-radius: 19px 19px 19px 19px;
margin:auto;`