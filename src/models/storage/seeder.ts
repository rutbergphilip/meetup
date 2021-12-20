import { IEvent } from './../../interfaces/event.interface';
import { idGenerator } from './../../utils/misc.utils';
import { User } from '../../interfaces/user.interface';
import events from './events.storage';
import Event from '../event';
import * as faker from 'faker';

((): void => {
  for (let index = 0; index < 10; index++) {
    const user: User = {
      id: idGenerator(),
      name: faker.name.findName(),
    };

    const meetup: IEvent = new Event(
      faker.name.title(),
      faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
      user
    );

    events.set(`event-${index}-${idGenerator()}`, meetup);
  }
})();

console.log(events);
