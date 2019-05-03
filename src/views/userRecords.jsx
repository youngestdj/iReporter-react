import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import UserRecordGroup from '../components/userRecordGroup';
import Footer from '../components/footer';
import { getCookie } from '../assets/js/cookies';
import { getRecords } from '../redux/actions/records';

const UserRecords = (props) => {
  if (!getCookie('iReporterToken')) return <Redirect to="/login" />;
  const [redFlags, setRedFlags] = useState({
    allRedFlags: null
  });
  const [interventions, setInterventions] = useState({
    allInterventions: null
  });
  useEffect(() => {
    const getRedFlags = async () => {
      await props.getRecords('red-flags').then(res => setRedFlags({ allRedFlags: res.data }));
    };
    const getInterventions = async () => {
      await props.getRecords('interventions').then(res => setInterventions({ allInterventions: res.data }));
    };
    getRedFlags();
    getInterventions();
  }, []);

  return (
    <>
      <Header isLoggedIn username={getCookie('iReporterUsername')} />
      <section className="signup">
        <div className="container">
          <div className="vertical-spacer" />
          <h2>Red flags</h2>
          <div className="red-flags">
            {
              redFlags.allRedFlags ? redFlags.allRedFlags.map(data => (
                <UserRecordGroup
                  key={data.id}
                  date={data.createdon}
                  coordinates={data.location}
                  title={data.title}
                  comment={data.comment}
                  status={data.status}
                  id={data.id}
                  type="red-flags"
                />
              )) : <span>Loading red-flags...</span>
            }
          </div>

          <h2>Interventions</h2>
          <div className="interventions">
            {
              interventions.allInterventions ? interventions.allInterventions.map(data => (
                <UserRecordGroup
                  key={data.id}
                  date={data.createdon}
                  coordinates={data.location}
                  title={data.title}
                  comment={data.comment}
                  status={data.status}
                  id={data.id}
                  type="interventions"
                />
              )) : <span>Loading interventions...</span>
            }
          </div>
        </div>
      </section>
      <Footer isLoggedIn />
    </>
  );
};

UserRecords.propTypes = {
  getRecords: PropTypes.func.isRequired
};

export default connect(() => ({}), { getRecords })(UserRecords);
