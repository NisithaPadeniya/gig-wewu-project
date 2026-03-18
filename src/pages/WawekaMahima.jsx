import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const paragraphs = [
  'වැවේ කින් සිදු කෙරෙන මෙහෙවර කියා නිමකළ නොහැක.',
  'කොටස් වලට බෙදා විශ්ලේෂණය කරන්නේ නම් වැවේ කින් පාරිසරික, විශේෂයෙන්ම මිනිස් වර්ගයා වෙත සුවිශල් සාමාජීය මෙන්ම ආර්ථික මෙහෙයන් ඉටුකරනු ලැබේ.',
  'වැවෙන් අළුට ලෙන් කුඹුරට, කුඹුරෙන් අළට වනාන්තරයට, නැවත වැවට ආපසු අළට.',
];

const WawekaMahima = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page wawekamahima-page" lang="si">
        <header>
          <h2>වැවේ ක මහිම</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="wawekamahima-section">
              <h3>වැවේ ක මහිම</h3>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <hr />

            <section className="wawekamahima-link">
              <a href="#" onClick={(event) => event.preventDefault()}>
                කාලගුණ විපර්යාස හමුවේ වැව් වලින් ඉටු වන මෙහෙය
              </a>
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WawekaMahima;
