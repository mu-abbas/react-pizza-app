import { formatCurrency } from '../../utilities/helpers';

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-2 py-2">
      <img src={imageUrl} alt={name} className="rounded-sm size-24" />
      <div className="flex flex-col w-full">
        <p className="font-semibold">{name}</p>
        <p className="text-sm italic tracking-tight capitalize text-stone-500">{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between w-full mt-auto">
          {!soldOut ? (
            <p className="text-base">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-semibold tracking-tighter uppercase text-stone-500">Sold out</p>
          )}
          <button
            className={`cursor-pointer uppercase px-4 py-2 text-sm font-semibold tracking-tighter bg-yellow-400 rounded-full ${
              soldOut ? 'hidden' : ''
            } hover:bg-yellow-300 duration-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
