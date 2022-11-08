import React from 'react';
import { Suspense } from 'react';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Router from './components/routing/Router';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
