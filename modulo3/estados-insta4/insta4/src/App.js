import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export class Posts extends React.Component {
  state = { 
    post: [
      {
        usuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost:"https://picsum.photos/200/152",
      },
      {
        usuario: "livinha",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/155",
      },
      {
        usuario: "vitinho",
        fotoUsuario: "https://picsum.photos/50/513",
        fotoPost: "https://picsum.photos/200/154",
      }
    ]
  };

  render() {
    const listaDePosts = this.state.post.map((user,index) => {
      return (
        <div key={index}>
          <img src={user.fotoUsuario}/>
          <p>{user.usuario}</p>
          <img src={user.fotoPost}/>
        </div>
      );
    }


// class App extends React.Component {
//   render() {
//     return (
//       <MainContainer>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/51'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />
//         <Post
//           nomeUsuario={'livinha'}
//           fotoUsuario={'https://picsum.photos/50/53'}
//           fotoPost={'https://picsum.photos/200/152'}
//         />
//         <Post
//           nomeUsuario={'vitinho'}
//           fotoUsuario={'https://picsum.photos/50/54'}
//           fotoPost={'https://picsum.photos/200/153'}
//         />
//       </MainContainer>
//     );
//   }
// }