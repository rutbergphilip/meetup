import { Snowflake } from '../types/snowflake.type';

export const idGenerator = (): Snowflake => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const getRandomDates = (): Date => {
  const start = new Date(2022, 12, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const sortByAscending = (array: Array<any>): Array<any> => {
  return array.sort((a: any, b: any) => a - b);
};
