import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateUser from '../features/user/CreateUser';

function Home() {
  const navigate = useNavigate();
  const { userName } = useSelector(state => state.user);

  return (
    <div className="container flex flex-col items-center gap-2 px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 sm:gap-4 md:py-16">
      <h1 className="text-xl font-semibold uppercase sm:text-3xl">
        The best pizza.
        <br />
      </h1>
      <p className="max-w-lg mx-auto text-xl font-semibold text-yellow-500 sm:text-2xl md:max-w-max">
        Straight out of the oven, straight to you.
      </p>

      {userName === '' ? (
        <CreateUser />
      ) : (
        <button
          className="px-6 py-3 mt-6 text-sm font-semibold capitalize transition duration-300 bg-yellow-400 rounded-full md:mt-12 md:text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
          onClick={() => navigate('./menu')}
        >
          continue ordering, {userName.split(' ')[0]}
        </button>
      )}
    </div>
  );
}

export default Home;
