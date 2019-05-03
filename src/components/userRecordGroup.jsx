/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import '../assets/css/style.css';
import PropTypes from 'prop-types';
import Button from './button';
import Modal from './modal';
import DeleteModal from './deleteModal';

const UserRecordGroup = (props) => {
  const {
    date, title, comment, status, coordinates, type, id
  } = props;

  const [state, setState] = useState({
    modal: false,
    action: null
  });

  const editModal = () => {
    setState({ ...state, modal: true, action: 'edit' });
  };
  const deleteModal = () => {
    setState({ ...state, modal: true, action: 'delete' });
  };
  const closeModal = () => { setState({ ...state, modal: false }); };

  return (
    <>
      {
        state.modal && (state.action === 'edit') ? <Modal type={type} id={id} closeModal={closeModal} /> : null
      }
      {
        state.modal && (state.action === 'delete') ? <DeleteModal type={type} id={id} closeModal={closeModal} /> : null
      }
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
          {
            status === 'draft' ? (
              <div className="record-item center">
                <Button type="edit" text="Edit" onClick={editModal} />
                <Button type="delete" text="Delete" onClick={deleteModal} />
              </div>
            ) : <div className="record-item center record-status">{status}</div>
          }
        </fieldset>
      </div>
    </>
  );
};

UserRecordGroup.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default UserRecordGroup;
