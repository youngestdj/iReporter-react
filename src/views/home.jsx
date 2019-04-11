import React from 'react';
import Header from '../components/header';

const Home = () => (
  <>
    <Header />
    <section className="main loud">
      <div className="container">
        <h1>Help us curb corruption</h1>
        <p>
          Bring any form of corruption to the notice of appropriate authorities and the
general public. You can also report on things that needs government intervention
        </p>
        <a href="/signup" className="button">Get started</a>
      </div>
    </section>
  </>
);

export default Home;
