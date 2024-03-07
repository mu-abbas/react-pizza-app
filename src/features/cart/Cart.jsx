import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="container max-w-3xl p-4 mx-auto space-y-8">
      <Link to="/menu" className="text-blue-400 transition duration-300 hover:text-blue-600 focus:text-blue-600">
        &larr; Back to menu
      </Link>
      <h2 className="text-xl font-semibold text-stone-700">Your cart, Muhammad</h2>
      <ul className="divide-y divide-stone-200">
        {cart.map(item => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="space-x-2">
        <Link
          className="p-4 mt-6 text-sm font-semibold uppercase transition duration-300 bg-yellow-400 rounded-full md:mt-12 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1"
          to="/order/new"
        >
          Order pizzas
        </Link>
        <button className="px-4 py-3 mt-6 text-sm font-semibold uppercase transition duration-300 border-2 rounded-full bg-stone-100 md:mt-12 border-stone-300 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-1 text-stone-400 hover:text-stone-600">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
