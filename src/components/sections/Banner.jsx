import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Banner = React.memo(() => {
  const { scrollToElement } = useSmoothScroll(0);

  const handleScrollClick = (e) => {
    e.preventDefault();
    scrollToElement('one');
  };

  return (
    <section id="banner">
      <div className="inner sinhala-page" lang="si">
        <h2>නමෝ බුඬාය!</h2>
        <p>
          චිරන්තන දෘෂ්ටි වශයෙන් සහම්පතී මහා බ්‍රහ්මරාජෝත්තමයාණන් වහන්සේ ප්‍රමුඛ
          සමස්ත දේවසභා ඇතුලත් දේව මණ්ඩලයෝද ශ්‍රී භාර කැත්කුලකොත් ඔක්කාක
          උභයකුලපාරිශුඞ ශුඞ වංශ ඇති අඛණ්ඩසන්තති රාජකුල මස්තකයේ උපන්නාවූ රාජකීය
          මහා සම්මතාදී පරම්පරානුයාත ත්‍රීසිංහළබුඬක්ෂේත්‍රාග්‍රරාජශ්‍රීපදප්‍රාප්තාභික්ශික්ෂිත
          මහාස්වාමි මහාරාජෝත්තමයාණන් වහන්සේලාද ස්වකීය ශීර්ෂ මස්තකයේ රුවා ප්‍රමුඛ
          ප්‍රධාන කොට දරන ලද්දාවූ සම්බුඬශාසනයේ චින්තනදෘෂ්ටි මාර වීර වාරණ
          කණ්ඨිරවායමාන ශ්‍රී සඬර්‍මවර චක්‍රවර්තිස්වාමී වූ උතුම් ගෝතම බුදුන්
          වහන්සේ නාමයට උපහාර වම්හ
        </p>
        {/* <ul className="actions special">
          <li><a href="#one" className="button primary" onClick={handleScrollClick}>ඉදිරියට</a></li>
        </ul> */}
      </div>
      <a href="#one" className="more scrolly" onClick={handleScrollClick}>ඉදිරියට</a>
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;
