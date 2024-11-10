export const convertDate = (date, lang = "TR") => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(lang, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

export const formatPhoneNumber = (phone) => {
  return `+(90) ${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(
    6,
    8
  )} ${phone.slice(8, 10)}`;
};
