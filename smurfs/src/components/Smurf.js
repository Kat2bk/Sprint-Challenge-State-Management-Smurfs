import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions";
import AddingSmurf from "./AddingSmurf";

const Smurf = (props) => {
    console.log(props)
const getData = props.getSmurfs;

useEffect(() => {
    getData();
}, [getData]);

return (
    <div>
    <div className="smurf-box">
    {props.smurfs.map((smurfs) => (
        <div className="smurfs" key={smurfs.id}>
        <h3>Name: {smurfs.name}</h3>
        <h3>Age: {smurfs.age}</h3>
        <h3>Height: {smurfs.height}</h3>
        </div>
    ))}
    </div>
    <AddingSmurf addSmurf={props.addSmurf}/>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }

}

export default connect(mapStateToProps, {getSmurfs})(Smurf);