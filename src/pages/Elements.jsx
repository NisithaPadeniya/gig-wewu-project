import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Elements = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <article id="main">
        <header>
          <h2>Elements</h2>
          <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <h4>Text</h4>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>{'for (;;) { ... }'}</code>. Finally, <a href="#">this is a link</a>.</p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <h5>Blockquote</h5>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod.</blockquote>
            </section>

            <section>
              <h4>Lists</h4>
              <div className="row">
                <div className="col-6 col-12-medium">
                  <h5>Unordered</h5>
                  <ul>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                </div>
                <div className="col-6 col-12-medium">
                  <h5>Ordered</h5>
                  <ol>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis viverra.</li>
                    <li>Felis enim feugiat.</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default Elements;