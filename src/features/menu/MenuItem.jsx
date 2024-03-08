import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import { addItem, deleteItem } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const { cart } = useSelector(state => state.cart);
  const isAdded = cart.some(item => item.pizzaId === id);
  const dispatch = useDispatch();

  function addPizza() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-2 py-2">
      <img src={imageUrl} alt={name} className={`rounded-sm size-24 ${soldOut ? 'grayscale opacity-50' : ''}`} />
      <div className="flex flex-col w-full">
        <p className="font-semibold">{name}</p>
        <p className="text-sm italic tracking-tight capitalize text-stone-500">{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between w-full mt-auto">
          {!soldOut ? (
            <p className="text-base">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-semibold tracking-tighter uppercase text-stone-500">Sold out</p>
          )}
          {isAdded ? (
            <button
              className="px-4 py-2 text-xs font-semibold uppercase transition duration-300 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              onClick={() => dispatch(deleteItem(id))}
            >
              Delete
            </button>
          ) : (
            <button
              onClick={addPizza}
              className={`cursor-pointer uppercase px-4 py-2 text-sm font-semibold tracking-tighter bg-yellow-400 rounded-full ${
                soldOut ? 'hidden' : ''
              } hover:bg-yellow-300 duration-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
