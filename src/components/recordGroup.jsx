import React from 'react';
import '../assets/css/style.css';

const RecordGroup = () => (
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
    </fieldset>
  </div>
);

export default RecordGroup;
