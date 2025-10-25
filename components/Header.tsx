import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <a
      href={`#${page.toLowerCase()}`}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
      }}
      className={`text-base font-medium transition-colors duration-200 ${
        isActive ? 'text-green-800 font-bold' : 'text-gray-600 hover:text-green-800'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcfaf8]/80 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#directory" onClick={(e) => { e.preventDefault(); setCurrentPage('Directory'); }} className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-green-800">Oregon Chamber Directory</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <NavLink page="Directory" currentPage={currentPage} setCurrentPage={setCurrentPage}>Explore</NavLink>
            <NavLink page="AboutUs" currentPage={currentPage} setCurrentPage={setCurrentPage}>About</NavLink>
            <NavLink page="Services" currentPage={currentPage} setCurrentPage={setCurrentPage}>Services</NavLink>
            <NavLink page="FAQ" currentPage={currentPage} setCurrentPage={setCurrentPage}>FAQ</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
