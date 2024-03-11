import { formatCurrency } from '../../utilities/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(isLoadingIngredients);
  console.log(ingredients);

  return (
    <li className="py-4 space-y-2">
      <div className="flex justify-between">
        <p className="text-sm">
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm italic tracking-widest text-stone-400">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
