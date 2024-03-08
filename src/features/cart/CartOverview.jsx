import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const { cart } = useSelector(state => state.cart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);

  return (
    <>
      {!!totalQuantity && (
        <div className="flex items-center justify-between p-4 bg-stone-800 text-stone-300 md:px-8">
          <p className="space-x-2 text-sm font-semibold uppercase md:text-base ">
            <span>{totalQuantity} pizzas</span>
            <span>${totalPrice}</span>
          </p>
          <Link to="/cart" className="tracking-tight uppercase transition duration-300 hover:text-stone-100">
            Open cart &rarr;
          </Link>
        </div>
      )}
    </>
  );
}

export default CartOverview;
