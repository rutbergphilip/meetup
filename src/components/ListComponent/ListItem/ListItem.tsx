import { IEventCard } from '../../../interfaces/eventcomponent.interface';
import styles from './ListItem.module.css';

export const ListItem = ({
  title,
  description,
  date,
  organizer,
}: IEventCard) => {
  return (
    <li>
      <div className={styles['listItem']}>
        <div className={styles['meetupInfo']}>
          <h1 className={styles['title']}>{title}</h1>
          <p className={styles['description']}>{description}</p>
          <p className={styles['date']}>{date.toLocaleDateString()}</p>
        </div>
        {organizer ? <h3 className='organizer'>Organizer: {organizer}</h3> : ''}
      </div>
    </li>
  );
};
