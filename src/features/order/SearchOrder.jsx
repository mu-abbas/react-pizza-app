import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-xs text-center">
      <input
        className="w-10/12 px-6 py-2 text-sm tracking-tighter text-center transition duration-300 rounded-full text-stone-500 bg-yellow-50 placeholder:text-base placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500/10 focus:scale-105"
        type="text"
        placeholder="Search #order"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}
