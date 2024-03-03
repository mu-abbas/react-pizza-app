import { useLoaderData } from 'react-router-dom';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map(pizza => (
        <li key={pizza.id}>
          <p>{pizza.name}</p>
          <img src={pizza.imageUrl} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
