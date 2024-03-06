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
    <form onSubmit={handleSearch} className="flex-1 max-w-xs">
      <input
        className="w-full px-2 py-1 text-sm tracking-tighter text-center transition duration-300 bg-yellow-100 rounded-full placeholder:text-md sm:text-lg placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500/10 focus:scale-105"
        type="text"
        placeholder="Search #order"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}
