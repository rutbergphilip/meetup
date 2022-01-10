import React, { useState } from 'react';
import { IEventCard } from '../../../interfaces/eventcomponent.interface';
import events from '../../../database/events.database';
import styles from './ListItem.module.css';
import { User } from '../../../interfaces/user.interface';
import { getActiveUser } from '../../../utils/misc.utils';
import { ExpandModal } from '../ExpandModal/ExpandModal';

export const ListItem = ({
  id,
  title,
  description,
  date,
  organizer,
  comments,
  signups,
}: IEventCard) => {
  const activeUser = getActiveUser();

  const signupButton = () => {
    return organizer !== activeUser.name ? (
      <button
        className='signup'
        aria-label='signup-button'
        id={id}
        // @ts-ignore
        onClick={(e: MouseEvent) => {
          signup(e);
        }}
      >
        Sign up!
      </button>
    ) : (
      ''
    );
  };

  const [signupState, setSignupState] = useState<JSX.Element | string>(
    signupButton
  );

  const signup = (e: MouseEvent) => {
    e.preventDefault();
    if (activeUser) {
      events.get(id)?.addSignup(activeUser);
      setSignupState('Signed up!');
    }
  };

  return (
    <li>
      <div className={styles['listItem']}>
        <div className={styles['meetupInfo']}>
          <h1 className={styles['title']}>{title}</h1>
          <p className={styles['description']}>{description}</p>
          <p className={styles['date']} aria-label='date'>
            {date.toLocaleDateString()}
          </p>
        </div>
        <div className={styles['meetupHandlers']}>
          {organizer ? (
            <h3 className='organizer'>Organizer: {organizer}</h3>
          ) : (
            ''
          )}
          <div className={styles['buttons']}>
            {signupState}
            <ExpandModal
              id={id}
              title={title}
              description={description}
              date={date}
              organizer={organizer}
              comments={comments}
              signups={signups}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
