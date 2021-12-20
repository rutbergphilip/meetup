import { Snowflake } from '../types/snowflake.type';
import { User } from './user.interface';
import { Comment } from './comment.interface';

export interface IEventCard {
  id: Snowflake;
  title: string;
  description?: string;
  date: Date;
  organizer?: string;
  comments: Comment[];
  signups: User[];
}
