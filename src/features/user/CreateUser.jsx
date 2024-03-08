import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');

    setUsername('');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-2/3 px-4 py-2 text-base text-center border rounded-full border-stone-200 focus:ring-2 ring-yellow-400 placeholder:capitalize"
      />

      {username !== '' && (
        <div>
          <button className="px-6 py-3 mt-6 text-sm font-semibold capitalize transition duration-300 bg-yellow-400 rounded-full md:text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
