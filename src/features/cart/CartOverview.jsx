import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between p-4 bg-stone-800 text-stone-300 md:px-8">
      <p className="space-x-2 text-sm font-semibold uppercase md:text-base ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="tracking-tight uppercase transition duration-300 hover:text-stone-100">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
