import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import _useEffect from './Example';
import Test from './Test';

export default function App() {
  return (
    <div className="App">
      <Test />
      <Header />
      <Main />
      <Footer />
      <_useEffect />
    </div>
  );
};