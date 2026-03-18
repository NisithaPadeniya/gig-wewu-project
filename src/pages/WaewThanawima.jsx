import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const paragraphs = [
  'සිරිලක වැව් තැනුවේ රජවරුන්ගේ පාලනය යටතේය.',
  'මේ පාලක රජවරු එංගලන්තයේ පාලක රජවරුන්ය වඩා වෙනස් ය.',
  'ඔවුන්ගේ මූලික වගකීම් වූයේ සම්බුද්ධ ශාසනය රැකීමත්, රටේ හෝ ප්‍රදේශයේ ආරක්ෂාව සැලසීමත් සහ ගොවිතැන නඩත්තු කරවීමත් ය.',
  'කඳු රට මලය රට හැරුන විට ඉතිරි සියලුම ප්‍රදේශ වල වී ගොවිතැන සිදුකරේ වැව් ජලයෙනි. එබැවින් රජවරු ප්‍රාදේශීය හෝ තම පාලන ප්‍රදේශ වල වාරි මාර්ග කටයුතු පාලනය කලහ.',
  'ගම්මු සහ රටවැසියන් තමන්ට උවමනා පරිදි කුඹුරු ගොවිතැන් කල හ.',
  'වැවක් තැනීමේදී එයට අවශ්‍ය ජන සමූහය රැස් කිරීම ගම් මට්ටමින් ගැමියන් එකතුව සිදු කල අතර එයට අවශ්‍ය පරිපාලන දායකත්වය රජවරු ලබා දුන්හ.',
  'රජවරු වැව් තැනීමේ නිපුණ හෙළ වාරි ශිල්පීන් සොයා ඔවුනට අනුග්‍රහය දැක්වීය.',
  'වැවක් තනන්නේ පිහිටි පොළව වෙනස් නොකරය.',
  'පොළවේ හැඩය විමසීමෙන් පසු එයට සුදුසු පහත් බිමක් තෝරා ගනී.',
  'මේ බිම හොඳින් ජලය ලැබෙන ජලය ගබඩා කල හැකි තැනක් විය යුතුය.',
  'වැව් තැනීමේ දී වැව් බැම්ම තැනීම ඉතාම සුවිශේෂී කාර්යභාරයකි.',
  'කුඩා වැව් කොටුවක හෝ මහ වැවක වැව් ජල ගිල්ම තීරණය කරන්නේ වැව් බැම්ම යි.',
  'යෝධ විසල් වැව් තැනීම සඳහා රාජ්‍ය අනුග්‍රහය ලැබේ.',
  'තවමත් ඈත පිටිසර ගම්වල තනිවම කුඩා වෑ කොටුවක් බැඳී පිරිස් ජීවතුන් අතර සිටී.',
];

const WaewThanawima = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main" className="sinhala-page waewthanawima-page" lang="si">
        <header>
          <h2>වැව් තැනවීම</h2>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <section className="waewthanawima-layout">
              <div className="waewthanawima-media">
                <img src="/images/pic03.jpg" alt="" />
              </div>

              <div className="waewthanawima-content">
                <h3>වැව් තැනවීම</h3>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default WaewThanawima;
