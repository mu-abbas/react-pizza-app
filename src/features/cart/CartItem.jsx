import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import { deleteItem } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col gap-2 py-2 md:flex-row md:justify-between md:items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <button
          className="px-4 py-2 text-xs font-semibold uppercase transition duration-300 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
          onClick={() => dispatch(deleteItem(pizzaId))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
