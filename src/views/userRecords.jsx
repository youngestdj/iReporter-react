import React from 'react';
import Header from '../components/header';
import UserRecordGroup from '../components/userRecordGroup';
import Footer from '../components/footer';

const UserRecords = () => (
  <>
    <Header />
    <section className="signup">
      <div className="container">
        <div className="vertical-spacer" />

        <div id="error" />
        <div id="success" />

        <h2>Red flags</h2>
        <div className="red-flags">
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
        </div>

        <h2>Interventions</h2>
        <div className="interventions">
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
          <UserRecordGroup />
        </div>

      </div>
    </section>
    <Footer />
  </>
);

export default UserRecords;
