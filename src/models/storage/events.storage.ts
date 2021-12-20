import { IEvent } from '../../interfaces/event.interface';
import { Snowflake } from '../../types/snowflake.type';

const events: Map<Snowflake, IEvent> = new Map();

export default events;
