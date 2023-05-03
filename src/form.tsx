import React from "react";
import { ChangeEvent } from "react";

interface NewFormProps{
    saveContacts(contact:string): void;
}

export const Form:React.FC<NewFormProps> = ({ saveContacts }) => {

    const [contact, setContact] = React.useState("")
    const [lastNameContact, setLastNameContact] = React.useState("")


    const updateContact = (event:ChangeEvent<HTMLInputElement>) => {
        setContact(event.target.value)
    }
    const updateLastNameContact = (event:ChangeEvent<HTMLInputElement>) => {
        setLastNameContact(event.target.value)
    }

    const onSaveContactClick = () => {
        saveContacts(contact)
        saveContacts(lastNameContact)
        setContact("")
        setLastNameContact("")

    }

    
   

    return(
        <>
        <div>

            <input onChange={updateContact} value={contact} type="text" name="FirstName" placeholder="First Name" required={true}/>
            <input onChange={updateLastNameContact} value={lastNameContact} type="text" name="LastName" placeholder="Last Name" required={true}/>
            <div>

                <input  type="radio" id="active" name="status" value="active" checked={true}/>
                <label htmlFor="active">Active</label>

                <input type="radio" id="inactive" name="status" value="inactive" />
                <label htmlFor="inactive">Inactive</label>
            </div>

            <button onClick={onSaveContactClick}>Save Contact</button>

        </div>
    </>

    )
    
}
