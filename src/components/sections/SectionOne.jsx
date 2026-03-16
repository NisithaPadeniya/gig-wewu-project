import React from 'react';

const SectionOne = React.memo(() => {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner sinhala-page" lang="si">
        <header className="major">
          <h2>පූජා වෙඩිල්ල</h2>
          <p>මේ දැනුම මා රැස් කලේ රට පුරා තැන තැන අස්සක් මුල්ලක් නෑර ඇවිදිමින්ය.</p>
          <p>මේ දැනුම සහ තොරතුරු ලබා දුන්නේ පිටිසර ගැමියන් ය.</p>
          <p>ඔවුන් කිසි කලෙක මාගේ මතකයෙන් නොමියෙන අතර මේ දැනුම ඔවුන්ට උපහාරයක් ම වේවා.</p>
          <p>දැනුම එක් රැස් කර ක්‍රමවත් ව ඉදිරිපත් කිරීමට පොත පතද උපකාරී විය.</p>
          <p>
            මා කලේ තැන තැන ඇවිද තොරතුරු රැස් කිරීමත් සමහරක් පොත පත කියවා එම
            තොරතුරු එක් තැනකට ගෙන ඒමත් පමණි.
          </p>
          <p>ඒ දැනුම බෙදා දෙන්නට ද කැමැත්තමි.</p>
          <p>මෙම දැනුම මා හට අයිති දැනුමක් නොවේ.</p>
          <p>දේශීය දැනුම නිර්මාණය කරන්නට පුලුවං නම් කොච්චර පිනක්ද...</p>
        </header>
      </div>
    </section>
  );
});

SectionOne.displayName = 'SectionOne';

export default SectionOne;
