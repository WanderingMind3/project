import { useSelector } from "react-redux"
import { Form } from "./form"
import { contactState } from "./contactReducer"
import { useDispatch } from "react-redux"
import { addContact } from "./action"
import Navbar from "./navbar"
import Map from "./leaflet"

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
      Component = Map
      break;
  }

  return (
    <>

      <Navbar />
      {Component}

      <Form saveContacts={onAddContact} />

      <hr />

      <ul className="m-3 p-3">
        {contacts.map((contact) => {
          return <li className=" m-1.5 sm:justify-between justify-center items-center " key={contact}>{contact}</li>
        })}
        <br />
      </ul>



    </>
  )
}

export default App
