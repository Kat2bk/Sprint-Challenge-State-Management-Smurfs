import React, {useState} from "react";

const AddingSmurf = (props) => {
    console.log("props from addingSmurf", props)
const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
})

const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
        name: "",
        age: "",
        height: ""
    });
};

const handleChanges = event => {
    setNewSmurf({
        ...newSmurf,
        [event.target.name]: event.target.value
    });
};

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" onChange={handleChanges} value={newSmurf.name} />
        <input type="text" name="age" placeholder="age" onChange={handleChanges} value={newSmurf.age} />
        <input type="text" name="height" placeholder="height" onChange={handleChanges} value={newSmurf.height} />
        <button className="submit-btn" type="submit">Create Smurf</button>

        </form>
        </div>
    )
}

export default AddingSmurf;