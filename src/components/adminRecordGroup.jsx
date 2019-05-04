import React from 'react';
import '../assets/css/style.css';
import Button from './button';

const AdminRecordGroup = () => (

  <div className="admin-record-group">
    <fieldset>
      <legend>Jaime Lannister (22 - 11 - 2018)</legend>
      <div className="record-item">
        <span className="title">Title:</span>
        <span className="content">Sars beat my boyfriend up</span>
      </div>
      <div className="record-item">
        <span className="title">Coordinates:</span>
        <span className="content">6.5244° N, 3.3792° E</span>
      </div>
      <div className="record-item">
        <div className="title">Comment:</div>
        <div className="content">
          Sars assaulted my boyfriend at ikeja.
          We didn't do anything wrong.
          They illegally searched our phones and computers and we complied....
          <span className="see-more">see more</span>
        </div>
      </div>
      <div className="record-item center">
        <Button type="edit" text="Resolve" />
        <Button type="edit" text="Investigate" />
        <Button type="delete" text="Reject" />
      </div>
    </fieldset>
  </div>
);

export default AdminRecordGroup;
