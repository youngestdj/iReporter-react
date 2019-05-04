/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import Button from '../components/button';
import Footer from '../components/footer';
import { createRecord } from '../redux/actions/records';
import { getCookie } from '../assets/js/cookies';

const CreateRecord = (props) => {
  if (!getCookie('iReporterToken')) return <Redirect to="/login" />;

  const [state, setState] = useState({
    title: null,
    type: null,
    longitude: null,
    latitude: null,
    comment: null,
    success: null,
    error: null,
    loading: false
  });

  const updateInput = (event) => {
    event.preventDefault();
    setState({
      ...state, [event.target.name]: event.target.value, error: null, success: null
    });
  };

  const location = `${state.longitude} ${state.latitude}`;
  const { title, type, comment } = state;
  const recordData = {
    title, type, comment, location
  };
  const completeRequest = async (event) => {
    event.preventDefault();
    setState({
      ...state, error: null, success: null, loading: true
    });
    if (!state.type) return setState({ ...state, error: 'Please select a record type' });
    const res = await props.createRecord(recordData);
    if (res.status !== 201) {
      setState({ ...state, error: res.error, loading: false });
    } else {
      setState({ ...state, success: res.data[0].message, loading: false });
    }
  };

  return (
    <>
      <Header isLoggedIn username={getCookie('iReporterUsername')} />
      <section className="signup record">
        <div className="container">
          <h2>Create record</h2>
          <p>
            Alert the authorities and the general public about any form of corruption.
            You can also report on things that needs government intervention.
            You can create a red-flag record (An incident linked to corruption)
            or intervention record
             (a call for a government agency to intervene e.g
  repair bad road sections, collapsed bridges, flooding e.t.c).
          </p>
          <div className="vertical-spacer" />

          <form name="createRecord">
            {
              state.error ? <div id="error">{state.error}</div> : null
            }
            {
              state.success ? <div id="success">{state.success}</div> : null
            }
            {
              state.loading ? <div id="loading">Loading...</div> : null
            }
            <input type="text" name="title" placeholder="Record title" onChange={updateInput} />
            <select name="type" onChange={updateInput}>
              <option value="" name="type">Select record type</option>
              <option value="red-flags" className="option-style">Red flag</option>
              <option value="interventions" className="option-style">intervention</option>
            </select>
            <input type="text" name="longitude" placeholder="Location longitude" onChange={updateInput} />
            <input type="text" name="latitude" placeholder="Location latitude" onChange={updateInput} />
            <textarea name="comment" placeholder="Comment on this record (Add addtional info)" onChange={updateInput} />
            <Button type="" text="Create record" id="submit" onClick={completeRequest}>Create record</Button>
          </form>
        </div>
      </section>
      <Footer isLoggedIn />
    </>
  );
};

CreateRecord.propTypes = {
  createRecord: PropTypes.func.isRequired
};

export default connect(() => ({}), { createRecord })(CreateRecord);
