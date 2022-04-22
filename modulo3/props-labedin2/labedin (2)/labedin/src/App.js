import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQE3El0MA6nNng/profile-displayphoto-shrink_400_400/0/1648827029121?e=1655942400&v=beta&t=UkyojYtZUIQ7qPkR8l2mcSywmn-66dooykISmOsUR1E" 
          nome="Giulia Verruck Tortola" 
          descricao="Oi, sou a Giulia, estudante de Desenvolvimento Web Full Stack a Labenu. Tenho 25 anos, e graduação em Engenharia Ambiental e Sanitária. Hoje gerencio uma equipe de atendimento online."
        />
        
        <ImagemButton 
          imagem="http://cdn.onlinewebfonts.com/svg/img_211991.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
        imagem="https://w7.pngwing.com/pngs/36/701/png-transparent-computer-icons-email-desktop-email-miscellaneous-angle-triangle.png"
        nome="Email:"
        descricao="giuliavtortola@gmail.com"
      />
      <CardPequeno
        imagem="http://cdn.onlinewebfonts.com/svg/img_205835.png"
        nome="Endereço:"
        descricao="Rua das Flores, 208 - Fazendinha, Florianópolis/SC"
      />
      <CardPequeno
      imagem="https://www.kindpng.com/picc/m/194-1943740_phone-icons-80-free-icons-phone-symbol-in.png"
      nome="Telefone:"
      descricao="(48)99605-9855"
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=2147483647&v=beta&t=MMpHLjDuqe3Phl019qxj3n0AoEDlV0xH80A4sQJCv0Y" 
          nome="Labenu" 
          descricao="Web Full Stack. 2022-2023." 
        />
        
        <CardGrande 
          imagem="https://portal.ufpel.edu.br/wp-content/themes/Portal/imagens/header.svg" 
          nome="UFPel" 
          descricao="Engenharia Ambiental e Sanitária. 2014-2019." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          texto="GitHub" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="LinkedIn" 
        />        
      </div>
    </div>
  );
}

export default App;
