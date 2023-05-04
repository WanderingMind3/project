import { useSelector } from "react-redux"
import { Form } from "./form"
import { contactState } from "./contactReducer"
import { useDispatch } from "react-redux"
import { addContact } from "./action"
import Navbar from "./navbar"
import {Map} from "./leaflet"
import { useState } from "react"

function App() {

  const contacts = useSelector<contactState, contactState["contacts"]>((state) => state.contacts)
  const dispatch = useDispatch()

  const onAddContact = (contact: string) => {
    dispatch(addContact(contact))
  }

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Form
      break;

    case "/Map":
      Component = <Map/>
      break;
  }

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    
    setIsShown(current => !current);
  };

  return (
    <>

      <Navbar />
      {Component}

      <button className="p-5 rounded-sm" onClick={handleClick}>Create Contact</button>

      {isShown && (
        <Form saveContacts={onAddContact} />
      )}

      <hr />

      <ul className="m-3 p-3">
        {contacts.map((contact) => {
          return <li className=" m-1.5 grid " key={contact}>{contact}</li>
        })}
        <br />
      </ul>

    </>
  );
}

export default App;
