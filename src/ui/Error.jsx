import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div className="container py-12 mx-auto space-y-2 text-center">
      <h1 className="text-xl font-semibold">Something went wrong 😢</h1>
      <p>{error.statusText || error.message}</p>
      <button
        className="text-blue-400 transition duration-300 hover:text-blue-600 focus:text-blue-600"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
