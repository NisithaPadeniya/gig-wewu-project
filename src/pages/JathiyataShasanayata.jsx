import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const openingVerse = [
  'තර ව නාද කරති තේජ ~ අණසක ලොව පැතිර යන්ඩ',
  'දාර කොම්බු තාල නොයෙක් ~ සැබෑ පාදයෙන් වඩින්ඩ',
  'නෑර බේරි ගී තාලෙන් ~ දවුල් රාග සක් පිබින්ඩ',
  'ධීර කීර්ති බල වී මැති ~ කඩවර දෙවිඳුන් වඩින්ඩ',
];

const posts = [];

const JathiyataShasanayata = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page jss-page" lang="si">
        <header>
          <h2>ජාතිය ට ශාසනය ට</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="jss-intro">
              <h3>ජාතිය ට ශාසනය ට</h3>
              {openingVerse.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </section>

            <section className="jss-posts">
              {posts.map((post) => (
                <article key={post.id} className="jss-post-card">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                </article>
              ))}
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default JathiyataShasanayata;
