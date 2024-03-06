import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col items-center gap-2 px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 sm:gap-4 md:py-16">
      <h1 className="text-xl font-semibold uppercase sm:text-3xl">
        The best pizza.
        <br />
      </h1>
      <p className="max-w-lg mx-auto text-xl font-semibold text-yellow-500 sm:text-2xl md:max-w-max">
        Straight out of the oven, straight to you.
      </p>
      <button
        className="px-6 py-3 mt-6 text-sm font-semibold capitalize bg-yellow-400 rounded-full md:mt-12 md:text-lg"
        onClick={() => navigate('./menu')}
      >
        continue ordering, muhammad
      </button>
    </div>
  );
}

export default Home;
