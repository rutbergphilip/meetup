export const idGenerator = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const getRandomDates = () => {
  const start = new Date(2022, 12, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
