import { IEventCard } from '../../../interfaces/eventcomponent.interface';
import styles from './ListItem.module.css';

export const ListItem = ({ title, description, organizer }: IEventCard) => {
  return (
    <li className='meetup-list-item' style={styles}>
      <h1>{title}</h1>
      <p>{description}</p>
      {organizer ? <h3>Organizer: {organizer}</h3> : ''}
    </li>
  );
};
