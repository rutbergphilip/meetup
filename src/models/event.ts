import { Comment } from '../interfaces/comment.interface';
import { IEvent } from '../interfaces/event.interface';
import { User } from '../interfaces/user.interface';
import { getRandomDates, idGenerator } from '../utils/misc.utils';

class Event implements IEvent {
  readonly id = idGenerator();
  public title;
  public description;
  readonly date = getRandomDates();
  public organizer;
  comments: Comment[] = [];
  signups: User[] = [];

  public constructor(title: string, description?: string, organizer?: User) {
    this.title = title;
    this.description = description;
    this.organizer = organizer;
  }

  addComment(text: string, author: User) {
    const id = idGenerator();
    const date = new Date()
      .toLocaleString('en-SE', {
        timeZone: 'Europe/Stockholm',
      })
      .replace(',', '');

    const comment: Comment = {
      id,
      text,
      date,
      author,
    };

    this.comments.push(comment);
    return comment;
  }

  addSignup(user: User) {
    if (!this.signups.includes(user)) {
      this.signups.push(user);
    }
  }

  removeSignup(user: User) {
    if (this.signups.includes(user)) {
      this.signups.splice(this.signups.indexOf(user));
    }
  }

  isSignedUp(user: User) {
    return this.signups.some((usr) => usr.id === user.id);
  }

  hasCommented(user: User) {
    return this.comments.some((comment) => comment.author.id === user.id);
  }
}

export default Event;
