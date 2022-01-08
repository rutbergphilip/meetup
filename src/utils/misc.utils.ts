import { User } from './../interfaces/user.interface';
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

export const sortDateByAscending = (array: JSX.Element[]): JSX.Element[] => {
  return array.sort(
    (a: JSX.Element, b: JSX.Element) => a.props.date - b.props.date
  );
};

export const isDateSortedByAscending = (array: Date[]) =>
  array.every(
    (_, index: number) =>
      index === array.length - 1 || array[index] <= array[index + 1]
  );

export const getActiveUser = (): User => {
  return JSON.parse(localStorage.getItem('user') || '{}') as User;
};

export const setActiveUser = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user));
};
