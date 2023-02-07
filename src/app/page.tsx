'use client';
import React from 'react';

//components
import Header from '../components/Header';
import ContextProvider from '../context';

const Home = () => {
  return (
    <ContextProvider>
      <Header />
    </ContextProvider>
  );
};

export default Home;
