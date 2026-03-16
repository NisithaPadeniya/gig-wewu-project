import React from 'react';
import Header from '../components/layout/Header';
import Banner from '../components/sections/Banner';
import SectionOne from '../components/sections/SectionOne';
import SectionTwo from '../components/sections/SectionTwo';
import SectionThree from '../components/sections/SectionThree';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;