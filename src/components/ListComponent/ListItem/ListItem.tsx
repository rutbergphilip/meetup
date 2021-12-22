import React from 'react';
import { IEventCard } from '../../../interfaces/eventcomponent.interface';
import events from '../../../database/events.database';
import styles from './ListItem.module.css';

export const ListItem = ({
  id,
  title,
  description,
  date,
  organizer,
}: IEventCard) => {
  const signup = (e: MouseEvent) => {
    e.preventDefault();
    console.log(events.get(id));
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
          <button
            className='signup'
            aria-label='signup-button'
            // @ts-ignore
            onClick={(e: MouseEvent) => {
              signup(e);
            }}
          >
            Sign up!
          </button>
        </div>
      </div>
    </li>
  );
};
