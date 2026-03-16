import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Elements from './pages/Elements';
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
