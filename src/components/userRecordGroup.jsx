import React from 'react';
import '../assets/css/style.css';
import Button from './button';

const UserRecordGroup = () => (
  <div className="admin-record-group">
    <fieldset>
      <legend>(1) 2018 / 12 / 14</legend>
      <div className="record-item">
        <span className="title">Title:</span>
        <span className="content">This is a new red flag</span>
      </div>
      <div className="record-item">
        <span className="title">Coordinates:</span>
        <span className="content">6.5244° N, 3.3792° E</span>
      </div>
      <div className="record-item">
        <span className="title">Status:</span>
        <span className="content">draft</span>
      </div>
      <div className="record-item">
        <span className="title">Comment:</span>
        <span className="content">This is a new comment</span>
      </div>
      <div className="record-item center">
        <Button type="edit" id="e-red-flags_9_" text="Edit" />
        <Button type="delete" id="d-red-flags_9_" text="Delete" />
      </div>
    </fieldset>
  </div>
);

export default UserRecordGroup;
