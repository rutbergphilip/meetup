import { Snowflake } from '../types/snowflake.type';
import { User } from '../interfaces/user.interface';

const users: Map<Snowflake, User> = new Map();

export default users;
