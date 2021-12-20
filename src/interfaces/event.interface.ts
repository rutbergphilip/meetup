import { Snowflake } from '../types/snowflake.type';
import { User } from './user.interface';
import { Comment } from './comment.interface';

export interface IEvent {
  id: Snowflake;
  title: string;
  description?: string;
  date: Date;
  organizer?: User;
  comments: Comment[];
  signups: User[];
}
