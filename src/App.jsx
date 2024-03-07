import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import menuLoader from './loaders/menuLoader';
import orderLoader from './loaders/orderLoader';
import createOrderAction from './actions/createOrderAction';
import Loader from './ui/Loader';
import Error from './ui/Error';

const Home = lazy(() => import('./ui/Home'));
const Menu = lazy(() => import('./features/menu/Menu'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Order = lazy(() => import('./features/order/Order'));
const AppLayout = lazy(() => import('./ui/AppLayout'));
const CreateOrder = lazy(() => import('./features/order/CreateOrder'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: 'order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
