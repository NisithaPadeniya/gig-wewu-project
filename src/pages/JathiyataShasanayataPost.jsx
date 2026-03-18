import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const paragraphs = [
  'මෙය නියැදි බ්ලොග් ලිපියකි.',
  'ඉදිරියේ දී ඔබ ලබා දෙන සම්පූර්ණ ලිපි මේ ආකාරයෙන්ම වෙන් වූ පිටුවකට ගෙන යා හැක.',
  'ලිපියේ මාතෘකාව, අන්තර්ගතය, සහ අනෙක් විස්තර මෙම පිටුවේ පෙන්වනු ඇත.',
];

const JathiyataShasanayataPost = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page jss-post-page" lang="si">
        <header>
          <h2>උදාහරණ ලිපිය</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="jss-post-full">
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

export default JathiyataShasanayataPost;
