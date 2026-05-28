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
export default Item;