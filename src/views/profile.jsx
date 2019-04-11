import React from 'react';
import Header from '../components/header';
import RecordGroup from '../components/recordGroup';
import Footer from '../components/footer';

const Profile = () => (
  <>
    <Header />
    <section className="signup">
      <div className="container">
        <h1>
          <span id="firstname">Moraine </span>
          <span id="lastname">Sedai </span>
          <span id="othernames">Olabimpe</span>
        </h1>
        <div className="stat-group">
          <div>Report stats</div>
          <div className="vertical-spacer" />
          <div className="stat">
            <div className="circle item" id="newCount">10</div>
            <div id="new">New</div>
          </div>
          <div className="stat">
            <div className="circle item" id="resolvedCount">20</div>
            <div id="resolved">Resolved</div>
          </div>
          <div className="stat">
            <div className="circle item" id="rejectedCount">30</div>
            <div id="rejected">Rejected</div>
          </div>
          <div className="stat">
            <div className="circle item" id="uInvestigationCount">40</div>
            <div id="uInvestigation">Under investigation</div>
          </div>
        </div>

        <div className="vertical-spacer" />

        <div id="error" />
        <div id="success" />

        <h2>Red flags</h2>
        <div className="red-flags">
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
        </div>

        <h2>Interventions</h2>
        <div className="interventions">
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
          <RecordGroup />
        </div>

      </div>
    </section>
    <Footer />
  </>
);

export default Profile;
