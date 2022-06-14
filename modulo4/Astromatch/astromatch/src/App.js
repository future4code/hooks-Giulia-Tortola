import Header from "./components/Header";
import Main from "./components/Main";
import { BoxStyled } from "./components/Styles";
import ChatContainer from "./components/ChatContainer";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState('mainPage')

  const renderCurrentPage = () => {
    if(currentPage === 'mainPage'){
      return <Main/>
    } else if (currentPage === 'chatPage'){
      return <ChatContainer/>
    }
  }

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }
  return (
    
    <BoxStyled>
      <Header changePage={changePage}/>
      {renderCurrentPage()}

    </BoxStyled>
  );
}

export default App;
