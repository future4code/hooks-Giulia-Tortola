import styled from "styled-components"
import {FcList,FcNeutralDecision} from "react-icons/fc"

const HeaderContainer = styled.div`
display: flex;
height: 10vh; 
width: 30vw;
align-items: center;
justify-content: space-around;
align-self: center;
margin: auto;
color: #d3455b;`

const ButtonRefresh = styled.button`
background-color: transparent;
border: solid 0.5px #d4465e;
width: 30px;
height: 30px;
border-radius: 200px;
`
const ButtonChats = styled.button`
background-color: transparent;
border: solid 0.5px #d4465e;
width: 30px;
height: 30px;
border-radius: 200px;
`

const Header = (props) => {
    return(
        <HeaderContainer>
         <ButtonRefresh onClick={() => props.changePage('mainPage')}><FcNeutralDecision/></ButtonRefresh>
         <h1>AstroMatch</h1>
         <ButtonChats onClick={ () => props.changePage('chatPage')} ><FcList/></ButtonChats>
        </HeaderContainer>
        
    )
}

export default Header