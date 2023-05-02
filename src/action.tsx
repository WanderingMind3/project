export type Action = { type: "ADD_CONTACT"; payload: string };

export const addContact = (contact: string): Action => ({
  type: "ADD_CONTACT",
  payload: contact,
});