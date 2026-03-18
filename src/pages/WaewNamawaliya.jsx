import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const mahaWaew = [
  'අහය වැව',
  'මහවිල්විටිය වැව',
  'මින්නේරිය වැව',
  'කවුඩුල්ල වැව',
  'සිරිතලේ වැව',
  'පුරුල් වැව',
  'මාගල්ල වැව',
  'මහ කනදරාව වැව',
  'පරාකුම් සමුළය',
  'කලා වැව',
  'බසවක්කුලම වැව',
  'පඩවිය වැව',
  'නාච්චඩුව වැව',
  'තඩ්බොව වැව',
  'කන්තලේ වැව',
  'චහල්කඩ වැව',
  'යෝද වැව',
  'නුවර වැව',
  'මොර වැව',
  'අම්පාර වැව',
  'බල්ලු වැව',
  'කන්ඩළම වැව',
  'රනමඩුව වැව',
  'සොරොබොර වැව',
];

const WaewNamawaliya = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page waewnamawaliya-page" lang="si">
        <header>
          <h2>සිරි ලක වැව් සිතියම</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="waewnamawaliya-section">
              <h3>මහ වැව්</h3>
              <ul className="waewnamawaliya-list">
                {mahaWaew.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p className="waewnamawaliya-note">තව එකතු කරන්ට…………………</p>
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WaewNamawaliya;
