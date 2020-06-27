import React from "react";

const AddingSmurf = () => {



    return (
        <div>
        <form>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="age" placeholder="age" />
        <input type="text" name="height" placeholder="height" />
        <button className="submit-btn" type="submit">Create Smurf</button>
        
        </form>
        </div>
    )
}

export default AddingSmurf;