import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const JathiyataShasanayata = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page" lang="si">
        <header>
          <h2>ජාතිය ට ශාසනය ට</h2>
          <p>මෙම පිටුව සඳහා අන්තර්ගතය පසුව එක් කළ හැක.</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>ජාතිය ට ශාසනය ට</h3>
            <p>මෙම පිටුව සඳහා අන්තර්ගතය පසුව එක් කළ හැක.</p>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default JathiyataShasanayata;
