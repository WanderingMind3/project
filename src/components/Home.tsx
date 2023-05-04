import { useSelector } from "react-redux";
import { contactState } from "../contactReducer";
import { useDispatch } from "react-redux";
import { addContact } from "../action";
import Form from "../form";
import { useState } from "react";
interface Person {
  firstName: string;
  lastName: string;
  Status: string;
}
function Home() {
  const contacts = useSelector<contactState, contactState["contacts"]>(
    (state) => state.contacts
  );
  const dispatch = useDispatch();

  const onAddContact = (contact: any) => {
    dispatch(addContact(contact));
  };

  const people: Person[] = contacts;

  return (
    <>
      <div className="h-auto flex items-center justify-center">
        <Form saveContacts={onAddContact} />
        <ul className="m-3 p-3">
          {people.map((contact, i) => (
            <>
              <li
                className=" m-1.5 sm:justify-between justify-center items-center "
                key={i}
              >
                {contact.firstName} {contact.lastName}
              </li>
              <li
                className=" m-1.5 sm:justify-between justify-center items-center "
                key={i}
              >
                {contact.Status}
              </li>
            </>
          ))}
          <br />
        </ul>
      </div>
    </>
  );
}

export default Home;
