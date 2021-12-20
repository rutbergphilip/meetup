import { Comment } from '../interfaces/comment.interface';
import { IEvent } from '../interfaces/event.interface';
import { User } from '../interfaces/user.interface';
import { getDate, idGenerator } from '../utils/misc.utils';

class Event implements IEvent {
  readonly id = idGenerator();
  public title;
  public description;
  readonly date = getDate();
  public organizer;
  comments: Comment[] = [];
  signups: User[] = [];

  public constructor(title: string, description?: string, organizer?: User) {
    this.title = title;
    this.description = description;
    this.organizer = organizer;
  }

  public addComment(comment: Comment) {
    this.comments.push(comment);
  }

  public addSignup(user: User) {
    this.signups.push(user);
  }
}

export default Event;
