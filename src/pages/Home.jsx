import React from 'react';
import Header from '../components/layout/Header';
import SectionOne from '../components/sections/SectionOne';
import Footer from '../components/layout/Footer';
import Banner from '../components/sections/Banner';

const Home = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <Banner/>
      <SectionOne />
      <Footer />
    </div>
  );
};

export default Home;
