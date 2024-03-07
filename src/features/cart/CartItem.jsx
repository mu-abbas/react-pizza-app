import { formatCurrency } from '../../utilities/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 space-y-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <button className="px-4 py-2 text-xs font-semibold uppercase transition duration-300 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
