import React, { useState } from 'react';


const AddPerson = ({addNewPerson}) => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newPerson = {
            id: 1234,
            firstName: firstName,
            lastName: lastName,
            gender: "Na",
            dob: "Na",
            height: 0,
            weight: 0,
            eyeColor: "Na",
            occupation: "Na"
        }

        addNewPerson(newPerson)
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' value={firstName} onChange={(e) =>setFirstName(e.target.value)}/>
            <input type='text' value={lastName} onChange={(e) =>setLastName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddPerson;