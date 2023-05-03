import { useSelector } from "react-redux"
import { Form } from "./form"
import { contactState } from "./contactReducer"
import { useDispatch } from "react-redux"
import { addContact } from "./action"

function App() {

  const contacts = useSelector<contactState, contactState["contacts"]>((state) => state.contacts)
  const dispatch = useDispatch()

  const onAddContact = (contact:string) => {
    dispatch(addContact(contact))
  }

  return (
    <>

      <Form saveContacts={onAddContact} />

      <hr />

      <ul>
        {contacts.map((contact) =>{
          return <li key={contact}>{contact}</li>
        })}
      </ul>



    </>
  )
}

export default App
