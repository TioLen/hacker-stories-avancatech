import * as React from 'react';

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
];

// Por agora, estamos fazendo os componentes dentro do App.

// Componente funcional do Item
function Item({item}){ // {item} é o item passado quando essa função é chamada
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}<br/></a>
      </span>
      <span>{item.author}<br/></span>
      <span>{item.num_comments}<br/></span>
      <span>{item.points}<br/></span>
      <br></br>
    </li>
  );
}

{/* Lista não ordenada que imprime os itens */}
function List({list}){
  return (
    <ul>
      {list.map(
          function (item){
            return <Item key={item.objectID} item={item} /> // self-closing tag
          }
      )}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Minhas Histórias Hacker</h1>

      <label htmlFor="search">Procurar: </label>
      <input type="text" id="search" />
      <hr />
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