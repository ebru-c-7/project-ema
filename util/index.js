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

export const isEmpty = (text) => text.trim().length > 2;

export const isValidBirthDate = (date) => {
  const dateObj = new Date(date);

  return (
    dateObj.toString() !== "Invalid Date" &&
    new Date() > dateObj &&
    dateObj.getFullYear() > new Date().getFullYear() - 90 &&
    dateObj.getFullYear() < new Date().getFullYear() - 16
  );
};

export const isValidDate = (date) => {
  console.log(date);
  const dateObj = new Date(date);

  return dateObj.toString() !== "Invalid Date" && new Date() > dateObj;
};

export const isEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const FORM_DATA = [
  {
    name: "First Name",
    id: "first-name",
    type: "text",
    other: {},
  },
  {
    name: "Last Name",
    id: "last-name",
    type: "text",
    other: {},
  },
  {
    name: "Date of Birth",
    id: "dob",
    type: "date",
    other: {},
  },
  {
    name: "Date of Employment",
    id: "doe",
    type: "date",
    other: {},
  },
  {
    name: "Phone",
    id: "phone",
    type: "tel",
    placeholder: "5XXXXXXXXX",
    maxLength: "10",
  },

  {
    name: "Email",
    id: "email",
    type: "email",
    other: {},
  },
];

export const FORM_DATA_SELECT = [
  {
    name: "Department",
    id: "department",
    type: "text",
    options: ["", "Analytics", "Tech"],
  },
  {
    name: "Position",
    id: "position",
    type: "text",
    options: ["", "Junior", "Medior", "Senior"],
  },
];

export const NAVBAR_LINKS = [
  {
    to: "/",
    title: "Employees",
  },
  {
    to: "/add-new",
    title: "Add New",
  },
];
