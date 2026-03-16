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
      <div className="inner">
        <h2>Gig Wewu Website</h2>
        <p>Another fine responsive<br />
        site template freebie<br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>
        <ul className="actions special">
          <li><a href="#" className="button primary">Activate</a></li>
        </ul>
      </div>
      <a href="#one" className="more scrolly" onClick={handleScrollClick}>Learn More</a>
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;