import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import RecordGroup from '../components/recordGroup';
import Footer from '../components/footer';
import { getCookie } from '../assets/js/cookies';
import { getRecords } from '../redux/actions/records';

const Profile = (props) => {
  if (!getCookie('iReporterToken')) return <Redirect to="/login" />;

  const [redFlags, setRedFlags] = useState({
    allRedFlags: null
  });
  const [interventions, setInterventions] = useState({
    allInterventions: null
  });
  const stats = {
    new: 0,
    resolved: 0,
    rejected: 0,
    underInvestigation: 0,
  };
  const updateStats = (records) => {
    if (records) {
      records.map((data) => {
        if (data.status === 'draft') stats.new += 1;
        else if (data.status === 'resolved') stats.resolved += 1;
        else if (data.status === 'rejected') stats.rejected += 1;
        if (data.status === 'under investigation') stats.underInvestigation += 1;
        return stats;
      });
    }
  };
  useEffect(() => {
    const getAllRecords = async () => {
      await props.getRecords('red-flags').then(async (res) => {
        setRedFlags({ allRedFlags: res.data });
        await props.getRecords('interventions').then((res) => {
          setInterventions({ allInterventions: res.data });
        });
      });
    };
    getAllRecords();
  }, []);

  updateStats(redFlags.allRedFlags);
  updateStats(interventions.allInterventions);

  return (
    <>
      <Header isLoggedIn username={getCookie('iReporterUsername')} />
      <section className="signup">
        <div className="container">
          <h1>
            <span id="firstname">
              {`${getCookie('iReporterFirstname')} `}
            </span>
            <span id="lastname">
              {`${getCookie('iReporterLastname')} `}
            </span>
            <span id="othernames">
              {`${getCookie('iReporterOthernames')} `}
            </span>
          </h1>
          <div className="stat-group">
            <div>Report stats</div>
            <div className="vertical-spacer" />
            <div className="stat">
              <div className="circle item" id="newCount">{stats.new}</div>
              <div id="new">New</div>
            </div>
            <div className="stat">
              <div className="circle item" id="resolvedCount">{stats.resolved}</div>
              <div id="resolved">Resolved</div>
            </div>
            <div className="stat">
              <div className="circle item" id="rejectedCount">{stats.rejected}</div>
              <div id="rejected">Rejected</div>
            </div>
            <div className="stat">
              <div className="circle item" id="uInvestigationCount">{stats.underInvestigation}</div>
              <div id="uInvestigation">Under investigation</div>
            </div>
          </div>

          <div className="vertical-spacer" />
          <h2>Red flags</h2>
          <div className="red-flags">
            {
              redFlags.allRedFlags ? redFlags.allRedFlags.map(data => (
                (
                  <RecordGroup
                    key={data.id}
                    date={data.createdon}
                    coordinates={data.location}
                    title={data.title}
                    comment={data.comment}
                    status={data.status}
                  />
                ))) : <span>Loading red-flags...</span>
            }
          </div>

          <h2>Interventions</h2>
          <div className="interventions">
            {
              interventions.allInterventions ? interventions.allInterventions.map(data => (
                (
                  <RecordGroup
                    key={data.id}
                    date={data.createdon}
                    coordinates={data.location}
                    title={data.title}
                    comment={data.comment}
                    status={data.status}
                  />
                ))) : <span>Loading interventions...</span>
            }
          </div>

        </div>
      </section>
      <Footer isLoggedIn />
    </>
  );
};

Profile.propTypes = {
  getRecords: PropTypes.func.isRequired
};

export default connect(() => ({}), { getRecords })(Profile);
