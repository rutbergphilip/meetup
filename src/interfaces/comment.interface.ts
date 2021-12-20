import { User } from './user.interface';

export interface Comment {
  id: string;
  text: string;
  date: Date;
  author: User;
}
