import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Elements from './pages/Elements';
import Mankada from './pages/Mankada';
import Thawulla from './pages/Thawulla';
import WaeKandiya from './pages/WaeKandiya';
import WaewThanawima from './pages/WaewThanawima';
import WawekaMahima from './pages/WawekaMahima';
import EuropiyaWartha from './pages/EuropiyaWartha';
import WaewNamawaliya from './pages/WaewNamawaliya';
import PinPanduru from './pages/PinPanduru';
import JathiyataShasanayata from './pages/JathiyataShasanayata';
import './App.css';
import './assets/css/main.css';

const TRANSITION_DURATION_MS = 450;

function AppRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('route-enter');

  useEffect(() => {
    document.body.classList.toggle('landing', displayLocation.pathname === '/');

    return () => {
      document.body.classList.remove('landing');
    };
  }, [displayLocation.pathname]);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTransitionStage('route-enter');
      return undefined;
    }

    setTransitionStage('route-exit');

    const timeoutId = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setDisplayLocation(location);
      setTransitionStage('route-enter');
    }, TRANSITION_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [location, displayLocation]);

  return (
    <div className={`route-shell ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/generic" element={<Generic />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/mankada" element={<Mankada />} />
        <Route path="/thawulla" element={<Thawulla />} />
        <Route path="/wae-kandiya" element={<WaeKandiya />} />
        <Route path="/waew-thanawima" element={<WaewThanawima />} />
        <Route path="/waweka-mahima" element={<WawekaMahima />} />
        <Route path="/europiya-wartha" element={<EuropiyaWartha />} />
        <Route path="/waew-namawaliya" element={<WaewNamawaliya />} />
        <Route path="/pin-panduru" element={<PinPanduru />} />
        <Route path="/jathiyata-shasanayata" element={<JathiyataShasanayata />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
