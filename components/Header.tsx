
import React from 'react';

const WrenchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.23,12.28,11.39,14.12,2,6.73,3.41,5.32l1.42,1.42,1.21-1.21-1.42-1.42L5.83,2.91l6.36,6.36,2.12-2.12a.5.5,0,0,1,.71,0l2.83,2.83a.5.5,0,0,1,0,.71Zm-1.41-1.41L13.66,9,9,4.34,7.59,5.76l4.65,4.65Z"/>
        <path d="M21.09,12.72l-2.83-2.83a.5.5,0,0,0-.71,0L15.43,12,12,15.43l2.12,2.12,2.83-2.83,1.41,1.41,1.42-1.42,1.21,1.21,1.42-1.42-1.41-1.41Zm-6.36,3.54,1.42-1.42,1.12,1.12-1.42,1.42Z"/>
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 md:p-8">
      <div className="flex items-center space-x-4">
        <div className="bg-slate-600 p-3 rounded-full">
            <WrenchIcon />
        </div>
        <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">LKPD Pemeriksaan Komponen Rem Cakram</h1>
            <p className="text-slate-300 text-sm md:text-base">Teknik Kendaraan Ringan Otomotif</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
