import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Mankada = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page" lang="si">
        <header>
          <h2>මංකඩ</h2>
          <p>මේ රට වෙනුවෙන් සිදුකරන එක් සත්කාරයකි.</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <h3>මංකඩ</h3>
              <p>
                ශ්‍රී ලංකාවේ සුවිසල් සමාජීය ආර්ථික මෙන්ම දේශපාලණික වෙනස්කම්
                සිදුවිය යුතු යැයි මම විශ්වාස කරමි.
              </p>
              <p>ඒ සඳහා රටේ වහ වහා අවධානය යොමු කර විධි විධාන සකස් කළ යුතු වේ.</p>
            </section>

            <hr />

            <section>
              <h3>අවධානය යොමු කළ යුතු දේ</h3>
              <ul>
                <li>නිවැරදි අධ්‍යාපන ක්‍රමවේද යොදා ගැනීම ට</li>
                <li>ගිලිහී යන මානව ගුණාංග නැවත ඇති කිරීම ට</li>
                <li>පාරිසරික සම්පත් අරපිරිමැස්මෙන් පාවිච්චි කිරීම ට</li>
              </ul>
            </section>

            <hr />

            <section>
              <blockquote>
                එන්ට
                <br />
                වැව් තාවුල්ලට
                <br />
                ගොඩවෙලා කතා කරමු
                <br />
                තාම වැව බැඳලා ඉවර නෑ
                <br />
                ලියන්ට දේවල් බොහොමයි
              </blockquote>
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default Mankada;
