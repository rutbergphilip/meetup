import React, { useState } from 'react';
import styles from './ExpandModal.module.css';
import Modal from 'react-modal';
import { IEventCard } from '../../../interfaces/eventcomponent.interface';
import events from '../../../database/events.database';
import { getActiveUser } from '../../../utils/misc.utils';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
  },
};

Modal.setAppElement('body');

export const ExpandModal = (props: IEventCard) => {
  const { id, title, description, comments } = props;
  const event = events.get(id);
  const activeUser = getActiveUser();

  const eventComments = comments.map((comment) => {
    return (
      <div className={styles['event-comment']}>
        <li key={comment.id} className={styles['event-comment-author']}>
          {comment.author}
        </li>
        <li key={comment.id} className={styles['event-comment-text']}>
          {comment.text}
        </li>
      </div>
    );
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [listComments, setListComments] = useState(eventComments);
  const [commentText, setCommentText] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['modal']}>
      <p onClick={openModal} id={id} aria-label='expand-modal'>
        Expand
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel='Event'
        aria-label='modal'
      >
        <div className={styles['top']}>
          <h2>{title}</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <p>{description}</p>
        <ul className={styles['comments-wrapper']}>
          <div id='comments' className={styles['comments']}>
            {listComments}
          </div>
          <div className={styles['new-message']}>
            <input
              onChange={(event) => setCommentText(event.target.value)}
              className={styles['send-message-input']}
              type='text'
            ></input>
            <button
              onClick={() => {
                if (commentText === '') return;
                const newComment = event?.addComment(commentText, activeUser);
                setListComments(
                  listComments.concat(
                    <li key={newComment?.id}>
                      {activeUser.name}: {commentText}
                    </li>
                  )
                );
              }}
              className={styles['send-message-button']}
            >
              Send
            </button>
          </div>
        </ul>
      </Modal>
    </div>
  );
};
