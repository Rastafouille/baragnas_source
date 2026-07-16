import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const raidMenuItems = [
    { label: 'Infos', path: '/raid-noel' },
    { label: 'Règlement', path: '/raid-noel/reglement' },
    { label: 'Inscription', path: '/raid-noel/inscription' },
    { label: 'Résultats', path: '/raid-noel/resultats' },
    { label: 'Photos', path: '/raid-noel/photos' },

  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 sm:h-20 gap-4">
          {!isHomePage && (
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2D5016]/80 hover:bg-[#2D5016] transition-all duration-200 shadow-lg relative z-[101] pointer-events-auto"
              style={{ marginTop: '-16px' }}
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
          )}

          {/* Dropdown Menu */}
          <div className="relative pointer-events-auto" style={{ marginTop: '-16px' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2D5016]/80 hover:bg-[#2D5016] transition-all duration-200 shadow-lg relative z-[101]"
            >
              <span>Raid de Noël</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Items */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl overflow-hidden z-[102]">
                {raidMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-[#2D5016] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;