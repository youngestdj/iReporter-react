import React from 'react';
import Header from '../components/header';
import Button from '../components/button';
import Footer from '../components/footer';

const CreateRecord = () => (
  <>
    <Header />
    <section className="signup record">
      <div className="container">
        <h2>Create record</h2>
        <p>
          Alert the authorities and the general public about any form of corruption.
          You can also report on things that needs government intervention.
          You can create a red-flag record (An incident linked to corruption) or intervention record
           (a call for a government agency to intervene e.g
repair bad road sections, collapsed bridges, flooding e.t.c).
        </p>
        <div className="vertical-spacer" />

        <form name="createRecord">
          <div id="error" />
          <div id="success" />
          <input type="text" name="title" placeholder="Record title" />
          <select name="recordType">
            <option value="" selected="selected">Select record type</option>
            <option value="red-flags" className="option-style">Red flag</option>
            <option value="interventions" className="option-style">intervention</option>
          </select>
          <input type="text" name="longitude" placeholder="Location longitude" />
          <input type="text" name="latitude" placeholder="Location latitude" />
          <textarea name="comment" placeholder="Comment on this record (Add addtional info)" />
          <Button type="" text="Create record" id="submit">Create record</Button>
        </form>
      </div>
    </section>
    <Footer />
  </>
);

export default CreateRecord;
