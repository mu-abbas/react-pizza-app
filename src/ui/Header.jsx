import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header className="p-3 bg-yellow-400 sm:p-4">
      <nav className="flex flex-col items-center gap-2 md:gap-6 sm:flex-row sm:justify-between">
        <Link to="/" className="flex items-center text-xl font-light tracking-widest sm:text-2xl">
          Fast React Pizza co.
        </Link>
        <SearchOrder />
        <p className="hidden font-semibold tracking-tighter text-center uppercase text-md md:block">Muhammad Abbas</p>
      </nav>
    </header>
  );
}
