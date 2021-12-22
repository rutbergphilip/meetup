import React from 'react';
import events from '../../models/storage/events.storage';
import { ListItem } from './ListItem/ListItem';
import styles from './ListComponent.module.css';
import { sortDateByAscending } from '../../utils/misc.utils';

export const ListComponent = () => {
  const list: JSX.Element[] = [];
  for (const [key, value] of events.entries()) {
    list.push(
      <ListItem
        key={key}
        id={value.id}
        title={value.title}
        description={value.description}
        date={value.date}
        organizer={value.organizer?.name}
        comments={value.comments}
        signups={value.signups}
      />
    );
  }

  return (
    <div className={styles['wrapper']}>
      <ul className='meetup-list'>{sortDateByAscending(list)}</ul>
    </div>
  );
};
