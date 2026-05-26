import * as React from 'react';

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

function App() {
  return (
    <div>
      <h1>Minhas Histórias Hacker</h1>

      <label htmlFor="search">Procurar: </label>
      <input type="text" id="search" />

      <hr />
      <ul>
        {
          list.map(function (item) {
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
              // na próxima aula transformar item e lista em componentes
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;