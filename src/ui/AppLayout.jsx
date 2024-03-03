import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </>
      )}
    </>
  );
}
