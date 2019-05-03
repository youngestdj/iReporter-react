/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentRecord, updateData } from '../redux/actions/records';
import Button from './button';

const Modal = (props) => {
  const { type, id, closeModal } = props;
  const [record, setRecord] = useState({
    location: '',
    comment: '',
    request: false,
    message: '',
    success: ''
  });

  useEffect(() => {
    const getCurrentRecordRequest = async () => {
      await props.getCurrentRecord(type, id)
        .then((res) => {
          setRecord({
            ...record, location: res.data[0].location, comment: res.data[0].comment, request: true
          });
        });
    };
    getCurrentRecordRequest();
  }, []);

  const updateInput = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };
  const updateRecordData = async (field, payload) => {
    payload = { [field]: payload };
    const res = await props.updateData(type, id, field, payload);
    if (res.status === 200) setRecord({ ...record, message: res.data[0].message, success: true });
    else setRecord({ ...record, message: res.error, success: false });
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="header">
            {
              !record.request ? <span>Loading...</span> : null
            }
            {
              record.message && record.success ? (<div id="success">{record.message}</div>) : null
            }
            {
              record.message && !record.success ? (<div id="error">{record.message}</div>) : null
            }
            <a href="" className="close" onClick={closeModal}>×</a>
          </div>
          <span className="inline">Location</span>
          <textarea className="block" name="location" value={record.location} onChange={updateInput} />
          <Button id="l-red-flags_9_" type="block" text="Update Location" onClick={() => updateRecordData('location', record.location)} />
          <span>Comment</span>
          <textarea className="c-red-flags_9_" name="comment" value={record.comment} onChange={updateInput} />
          <Button id="c-red-flags_9_" type="edit-comment" text="Update comment" onClick={() => updateRecordData('comment', record.comment)} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  getCurrentRecord: PropTypes.func.isRequired,
  updateData: PropTypes.func,
  closeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  updateData: f => f
};

export default connect(() => ({}), { getCurrentRecord, updateData })(Modal);
