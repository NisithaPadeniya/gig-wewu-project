import React from 'react';

const priorities = [
  'නිවැරදි අධ්‍යාපන ක්‍රමවේද යොදා ගැනීමට',
  'ගිලිහී යන මානව ගුණාංග නැවත ඇති කිරීමට',
  'පාරිසරික සම්පත් අරපිරිමැස්මෙන් පාවිච්චි කිරීමට',
];

const SectionOne = React.memo(() => {
  return (
    <section id="one" className="home-vision">
      <div className="home-vision__inner sinhala-page" lang="si">
        <div className="home-vision__divider" aria-hidden="true" />

        <header className="home-vision__header">
          <h1>ශ්‍රී ලංකාවේ සුවිසල් සමාජීය ආර්ථික මෙන්ම දේශපාලනික වෙනස්කම් සිදුවිය යුතු යැයි මම විශ්වාස කරමි</h1>
        </header>

        <div className="home-vision__divider" aria-hidden="true" />

        <section className="home-vision__block" aria-labelledby="home-vision-subtitle">
          <p id="home-vision-subtitle" className="home-vision__lead">
            ඒ සඳහා රටේ
          </p>

          <ul className="home-vision__list">
            {priorities.map((item) => (
              <li key={item}>~ {item}</li>
            ))}
          </ul>

          <p className="home-vision__emphasis">
            වහ වහා අවධානය යොමු කර විධි විධාන සකස් කළ යුතු වේ
          </p>
        </section>

        <div className="home-vision__divider" aria-hidden="true" />

        <p className="home-vision__statement">මේ රට වෙනුවෙන් සිදුකරන එක් සත්කාරයකි</p>

        <div className="home-vision__divider" aria-hidden="true" />

        <div className="home-vision__cta" aria-label="Invitation">
          <p>එන්ට</p>
          <p>වැව් තාවුල්ලට</p>
          <p>ගොඩවෙලා කතා කරමු</p>
        </div>

        <p className="home-vision__note">තාම වැව බැඳලා ඉවර නෑ ලියන්ට දේවල් බොහොමයි</p>
      </div>
    </section>
  );
});

SectionOne.displayName = 'SectionOne';

export default SectionOne;
