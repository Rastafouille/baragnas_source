import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ChristmasRaidPage from '@/pages/ChristmasRaidPage';
import RegulationsPage from '@/pages/RegulationsPage';
import InscriptionPage from '@/pages/InscriptionPage';
import ResultsPage from '@/pages/ResultsPage';
import PhotosPage from '@/pages/PhotosPage';
import Video2019 from '@/pages/Video2019';
import Video2021 from '@/pages/Video2021';
import logo from '@/assets/images/logo-officiel.png';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundOpacity: 0.05,
      }}
    >
      <Router>
        <ScrollToTop />
        <Helmet>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/raid-noel" element={<ChristmasRaidPage />} />
          <Route path="/raid-noel/reglement" element={<RegulationsPage />} />
          <Route path="/raid-noel/inscription" element={<InscriptionPage />} />
          <Route path="/raid-noel/resultats" element={<ResultsPage />} />
          <Route path="/raid-noel/photos" element={<PhotosPage />} />
          <Route path="/raid-noel/photos/video-2019" element={<Video2019 />} />
          <Route path="/raid-noel/photos/video-2021" element={<Video2021 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;