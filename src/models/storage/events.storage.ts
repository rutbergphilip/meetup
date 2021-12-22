import { Snowflake } from '../../types/snowflake.type';
import Event from '../event';

const events: Map<Snowflake, Event> = new Map();

export default events;
