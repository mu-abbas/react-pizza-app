import { getMenu } from '../services/apiRestaurant';

export default async function MenuLoader() {
  return await getMenu();
}
