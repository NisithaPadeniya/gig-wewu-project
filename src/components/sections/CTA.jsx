import React from 'react';

const CTA = React.memo(() => {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner home-cta sinhala-page" lang="si">
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

CTA.displayName = 'CTA';

export default CTA;
