import React from 'react';
import Header from '../components/header';
import AdminRecordGroup from '../components/adminRecordGroup';
import Footer from '../components/footer';

const AllRecords = () => (
  <>
    <Header />
    <section className="signup">
      <div className="container">
        <div className="vertical-spacer" />

        <div id="error" />
        <div id="success" />

        <h2>Red flags</h2>
        <div className="red-flags">
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
        </div>

        <h2>Interventions</h2>
        <div className="interventions">
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
          <AdminRecordGroup />
        </div>

      </div>
    </section>
    <Footer />
  </>
);

export default AllRecords;
