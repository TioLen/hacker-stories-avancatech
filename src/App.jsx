import React, {useState} from 'react';
import Item from './components/Item';
import List from './components/List';
import Search from './components/Search';

{/*
// '.' significa o ditório atual
// '/components' significa a pasta 'components'
// ele busca esta pasta no diretório atual 
*/}

// list de 'stories'
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
];

// Por agora, estamos fazendo os componentes dentro do App.
function App() {
  return (
    <div>
      <h1>Minhas Histórias Hacker</h1>

      {/* Barra de busca */}
      <Search />
      <hr /> {/* Printa uma linha */}
      
      {/*
        <ListFunction listParameter={list}/>
        O primeiro "List", é a função.
        O segundo "list" é o parâmetro da função.
        O terceiro "list", é a lista criada no início do código.
      */}

      <List list={list}/>
    </div>
  );
}

export default App;