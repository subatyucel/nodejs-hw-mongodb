const isString = (query) => {
  return typeof query === 'string';
};

const parseFavourite = (favourite) => {
  if (!isString(favourite)) return;

  const parsedFavourite = favourite.toLowerCase() === 'true';
  return parsedFavourite;
};

const parseType = (type) => {
  if (!isString(type)) return;

  const isType = (type) => {
    return ['work', 'home', 'personal'].includes(type);
  };
  if (isType(type)) {
    return type;
  }
};

export const parseFilterParams = (query) => {
  const { type, favourite } = query;
  const parsedFavourite = parseFavourite(favourite);
  const parsedType = parseType(type);

  return {
    isFavourite: parsedFavourite,
    contactType: parsedType,
  };
};
