import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
