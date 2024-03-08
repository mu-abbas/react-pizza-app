import { formatCurrency } from '../../utilities/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(isLoadingIngredients);
  console.log(ingredients);

  return (
    <li className="py-4">
      <div className="flex justify-between">
        <p className="text-sm">
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
