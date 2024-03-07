import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="container flex flex-col max-w-3xl px-2 mx-auto divide-y mx-aut divide-stone-200">
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
