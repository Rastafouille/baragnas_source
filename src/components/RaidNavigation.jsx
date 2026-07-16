import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, UserPlus, Award, Camera, Home } from 'lucide-react';

const RaidNavigation = () => {
  const location = useLocation();

  const links = [
    { to: '/raid-noel', label: 'Accueil Raid', icon: Home, exact: true },
    { to: '/raid-noel/reglement', label: 'Règlement', icon: FileText },
    { to: '/raid-noel/inscription', label: 'Inscription', icon: UserPlus },
    { to: '/raid-noel/resultats', label: 'Résultats', icon: Award },
    { to: '/raid-noel/photos', label: 'Photos', icon: Camera },
  ];

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
       <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
         <div className="flex space-x-4 md:space-x-8 min-w-max py-4 justify-center">
           {links.map((link) => (
             <Link
               key={link.to}
               to={link.to}
               className={`flex items-center space-x-2 text-sm md:text-base font-medium transition-colors duration-200 pb-1 border-b-2 ${
                 isActive(link.to, link.exact)
                   ? 'border-[#2D5016] text-[#2D5016]'
                   : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
               }`}
             >
               <link.icon className="w-4 h-4" />
               <span>{link.label}</span>
             </Link>
           ))}
         </div>
       </div>
    </div>
  );
};

export default RaidNavigation;