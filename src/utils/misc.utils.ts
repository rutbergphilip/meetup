export const idGenerator = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const getDate = () => {
  return new Date();
};
