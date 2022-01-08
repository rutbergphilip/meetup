import { idGenerator } from '../utils/misc.utils';
import { User } from '../interfaces/user.interface';
import users from './users.database';
import events from './events.database';
import Event from '../models/event';
import * as faker from 'faker';

export const seeder = () => {
  localStorage.clear();

  for (let index = 0; index < 10; index++) {
    const user: User = {
      id: idGenerator(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    };

    users.set(user.id, user);

    const meetup: Event = new Event(
      faker.name.title(),
      faker.lorem.paragraph(1),
      user
    );

    events.set(meetup.id, meetup);
  }

  if (!localStorage.getItem('user')) {
    const loggedInUser: User = users.values().next().value;
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  }
};
