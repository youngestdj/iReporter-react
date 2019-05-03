/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRecord } from '../redux/actions/records';
import Button from './button';

const Modal = (props) => {
  const { type, id, closeModal } = props;

  const [record, setRecord] = useState({
    loading: false,
    success: null,
    message: ''
  });

  const deleteRecordData = async () => {
    setRecord({ ...record, loading: true });
    const res = await props.deleteRecord(type, id);
    if (res.status === 200) {
      setRecord({
        ...record, message: res.data[0].message, success: true, loading: false
      });
    } else {
      setRecord({
        ...record, message: res.error, success: false, loading: false
      });
    }
  };
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="header">
            {
              record.loading ? <div>Loading...</div> : null
            }
            {
              record.message && record.success ? (<div id="success">{record.message}</div>) : null
            }
            {
              record.message && !record.success ? (<div id="error">{record.message}</div>) : null
            }
            <a href="" className="close" onClick={closeModal}>×</a>
          </div>
          <div className="vertical-spacer" />
          <div>Are you sure you want to delete this record?</div>
          <div className="vertical-spacer" />
          <Button id="c-red-flags_9_" type="edit-comment" text="Delete record" onClick={deleteRecordData} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteRecord: PropTypes.func,
  closeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  deleteRecord: f => f
};

export default connect(() => ({}), { deleteRecord })(Modal);
