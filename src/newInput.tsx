export const NewInput = () => {
    return(
        <>
        <div>

            <input type="text" name="FirstName" placeholder="First Name" />
            <input type="text" name="LastName" placeholder="Last Name" />
            <div>

                <input type="radio" id="active" name="status" value="active" checked={true} />
                <label htmlFor="active">Active</label>

                <input type="radio" id="inactive" name="status" value="inactive" />
                <label htmlFor="inactive">Inactive</label>
            </div>

            <button>Save Contact</button>

        </div>
    </>

    )
    
}