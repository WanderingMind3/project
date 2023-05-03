import { useSelector } from "react-redux"
import { Form } from "./form"
import { contactState, lastNameState } from "./contactReducer"
import { useDispatch } from "react-redux"
import { addContact, addLastName } from "./action"

function App() {

  const contacts = useSelector<contactState, contactState["contacts"]>((state) => state.contacts)
  const dispatch = useDispatch()

  const onAddContact = (contact:string) => {
    dispatch(addContact(contact))
  }

  const lastName = useSelector<lastNameState, lastNameState["lastName"]>((state) => state.lastName)
  const dispatchLastName = useDispatch()

  const onAddLastName = (lastName:string) => {
    dispatchLastName(addLastName(lastName))
  }

  return (
    <>

      <Form saveContacts={onAddContact } saveLastName={onAddLastName} />

      <hr />

      <ul>
        {contacts.map((contact) =>{
          return <li key={contact}>{contacts}</li>
        })} {lastName.map((lastName) =>{
          return <li key={lastName}>{lastName}</li>
        })}
      </ul>



    </>
  )
}

export default App
