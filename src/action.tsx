export type Action = { type: "ADD_CONTACT"; payload: string;};

export const addContact = (contact: string): Action => ({
  type: "ADD_CONTACT",
  payload: contact,
});


export type lastNameAction = { type: "ADD_LASTNAME"; payload: string };

export const addLastName = (lastName: string): lastNameAction => ({
  type: "ADD_LASTNAME",
  payload: lastName,
});