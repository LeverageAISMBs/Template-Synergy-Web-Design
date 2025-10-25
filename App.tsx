import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import DirectoryPage from './pages/DirectoryPage';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Directory');

  const renderPage = () => {
    switch (currentPage) {
      case 'Directory':
        return <DirectoryPage />;
      case 'Services':
        return <Services />;
      case 'FAQ':
        return <FAQ />;
      case 'AboutUs':
        return <AboutUs />;
      default:
        return <DirectoryPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
