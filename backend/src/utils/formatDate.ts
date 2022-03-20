const formatDate = (date: Date) => {
  const dateToFormat = new Date(date);

  // eslint-disable-next-line prettier/prettier
  return `${dateToFormat.getDate()}/${dateToFormat.getMonth()}/${dateToFormat.getFullYear()}`;
};

export { formatDate };
