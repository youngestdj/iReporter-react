import React from 'react';
import PropTypes from 'prop-types';

const RecordGroup = (props) => {
  const {
    date, title, comment, status, coordinates
  } = props;

  return (
    <div className="admin-record-group">
      <fieldset>
        <legend>{date}</legend>
        <div className="record-item">
          <span className="title">Title:</span>
          <span className="content">{title}</span>
        </div>
        <div className="record-item">
          <span className="title">Coordinates:</span>
          <span className="content">{coordinates}</span>
        </div>
        <div className="record-item">
          <span className="title">Status:</span>
          <span className="content">{status}</span>
        </div>
        <div className="record-item">
          <span className="title">Comment:</span>
          <span className="content">{comment}</span>
        </div>
      </fieldset>
    </div>
  );
};

RecordGroup.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default RecordGroup;
