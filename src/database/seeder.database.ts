import { IEvent } from '../interfaces/event.interface';
import { idGenerator } from '../utils/misc.utils';
import { User } from '../interfaces/user.interface';
import events from './events.database';
import Event from '../models/event';
import * as faker from 'faker';

export const seeder = () => {
  for (let index = 0; index < 10; index++) {
    const user: User = {
      id: idGenerator(),
      name: faker.name.findName(),
    };

    const meetup: Event = new Event(
      faker.name.title(),
      faker.lorem.paragraph(1),
      user
    );

    events.set(meetup.id, meetup);
  }
};
