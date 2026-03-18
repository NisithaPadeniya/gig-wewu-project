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
        <h2>මහා සින්හළේ වැව්</h2>
        <p>
          මිහින්තලයේ අතිශය උත්කර්ශවත් තිරසාර සංවර්ධන ව්‍යාපෘතිය
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
