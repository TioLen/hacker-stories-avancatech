import React, {useState, useEffect} from 'react';
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

function App() {

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  // Lógica de filtro
  const filteredList = list.filter(
    function (item){
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  // renderizar elementos na tela
  return (
    <div>
      <h1>Minhas Histórias Hacker</h1>
      <Search onSearch={handleChange} searchTerm={searchTerm} />

      <p>Mostrando resultados para "{searchTerm}"</p>
      <hr />

      <>{/* <List list={filteredList}/>
        O primeiro "List", é a função.
        O segundo "list" é o parâmetro da função.
        O terceiro "list", é a lista criada no início do código.
      */}</>
      <List list={filteredList}/>
      
    </div>
  );
}

export default App;