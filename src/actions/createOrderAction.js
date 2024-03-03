import { redirect } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';

const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

export default async function CreateOrderAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const errors = {};
  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: !!data.priority,
  };

  if (!isValidPhone(newOrder.phone)) {
    errors.phone = 'Please insert a valid phone number!';
    return errors;
  }

  const createdOrder = await createOrder(newOrder);
  return redirect(`/order/${createdOrder.id}`);
}
