import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const paragraphs = [
  'විශේෂයෙන්ම ගහකොල ගහකොල වලින් සිදුවන මෙහෙය විසල් ය.',
  'වැව් තැනීමේදී මේ ගහකොළ සියල්ල තෝරා බේරා සිටුවනු ලැබ ඇත.',
];

const WaewKareGahaKola = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page wawekaregahakola-page" lang="si">
        <header>
          <h2>වැව් කරේ ගහ කොළ</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="wawekamahima-section">
              <h3>වැව් කරේ ගහ කොළ</h3>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WaewKareGahaKola;
