import { User } from './user.interface';
import { Comment } from './comment.interface';

export interface IEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  organizer?: User;
  comments: Comment[];
  signups: User[];
}
