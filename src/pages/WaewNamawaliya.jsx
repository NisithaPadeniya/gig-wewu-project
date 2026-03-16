import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const WaewNamawaliya = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page" lang="si">
        <header>
          <h2>වැව් නාමාවලිය</h2>
          <p>මෙම පිටුව සඳහා අන්තර්ගතය පසුව එක් කළ හැක.</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>වැව් නාමාවලිය</h3>
            <p>මෙම පිටුව සඳහා අන්තර්ගතය පසුව එක් කළ හැක.</p>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WaewNamawaliya;
