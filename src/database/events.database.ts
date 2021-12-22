import { Snowflake } from '../types/snowflake.type';
import Event from '../models/event';

const events: Map<Snowflake, Event> = new Map();

export default events;
