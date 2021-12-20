import { Comment } from '../interfaces/comment.interface';
import { IEvent } from '../interfaces/event.interface';
import { User } from '../interfaces/user.interface';
import { getDate, idGenerator } from '../utils/misc.utils';

// export interface IEvent {
//     id: string;
//     title: string;
//     description?: string;
//     date: Date;
//     organizer?: User;
//     comments?: Comment[];
//   }

class Event implements IEvent {
  readonly id = idGenerator();
  public title;
  public description;
  readonly date = getDate();
  public organizer;
  public static comments: Comment[] = [];

  public constructor(title: string, description?: string, organizer?: User) {
    this.title = title;
    this.description = description;
    this.organizer = organizer;
  }
}

export default Event;
