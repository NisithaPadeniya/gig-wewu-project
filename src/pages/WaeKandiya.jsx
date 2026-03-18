import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const paragraphs = [
  'වැවෙ ක ප්‍රධාන කාර්යය ජලය රැස්කර තබා ගැනීමයි.',
  'ජලය රැස් කර තබා ප්‍රයෝජනයට ගැනීමටත් ඒ ජලය විවිධ උවමනා වන් සඳහා වැවෙන් පිටට රැගෙන යාමටත් වැවේ විවිධ අංගෝපාංග නිර්මාණය කර තිබේ.',
  'ඒ ඒ අංගයෙන් එකිනෙකට වෙනස් කාර්යභාරයක් ඉටුවන අතර මේ අංග නිර්මාණය කිරීමේදී විශේෂයෙන්ම පරිසර හානිය අවම වන අයුරින් ද, ගබඩා කළ හැකි ජලය උපරිම වන අයුරෙන්ද, සෑම විටෙකම අවම මහන්සියකින් කාර්යක්ෂමතාවය උපරිම වන ආකාරයටත්, පිහිටි බිම වෙනස් නොකිරීමටත් වැව් තැනූ දියාලුවන් සමත් වී ඇත.',
];

const WaeKandiya = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page waekandiya-page" lang="si">
        <header>
          <h2>වෑ කණ්ඩිය</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="waekandiya-section">
              <h3>වෑ කණ්ඩිය</h3>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <hr />

            <section className="waekandiya-links">
              <Link to="/wae-angopanga">වැවෙ ක අංගෝපාංග</Link>
              <Link to="/waew-kare-gaha-kola">වැව් කරේ ගහ කොළ</Link>
            </section>

            <div className="waekandiya-image">
              <img src="/images/pic05.jpg" alt="" />
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WaeKandiya;
