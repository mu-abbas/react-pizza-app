import { getOrder } from '../services/apiRestaurant';

export default async function OrderLoader({ params }) {
  return await getOrder(params.orderId);
}
