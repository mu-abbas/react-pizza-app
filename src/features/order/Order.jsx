import { useLoaderData } from 'react-router-dom';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utilities/helpers';
import OrderItem from './OrderItem';

function Order() {
  const order = useLoaderData();
  console.log(order);
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="container max-w-3xl p-4 mx-auto space-y-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Order #{order.id} Status</h2>

        <div className="flex items-center justify-center gap-1">
          {true && (
            <span className="px-2 py-1 text-xs font-semibold tracking-tighter text-red-100 uppercase bg-red-500 rounded-full">
              Priority
            </span>
          )}
          <span className="px-2 py-1 text-xs font-semibold tracking-tighter text-green-100 uppercase bg-green-500 rounded-full">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6 md:flex-row md:justify-between bg-stone-200">
        <p className="font-semibold tracking-wide">
          {deliveryIn >= 0 ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃` : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y border-y divide-stone-200 border-stone-200">
        {cart.map(item => (
          <OrderItem item={item} key={item.name} />
        ))}
      </ul>

      <div className="flex flex-col gap-2 p-6 md:flex-row md:justify-between bg-stone-200">
        <p className="text-sm font-semibold text-stone-500">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold tracking-wide">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
