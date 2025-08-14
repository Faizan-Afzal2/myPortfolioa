import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Portfolio
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-indigo-600 font-semibold' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive('/about') 
                    ? 'text-indigo-600 font-semibold' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-indigo-600 font-semibold' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;