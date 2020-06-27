import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions";

const Smurf = (props) => {
    console.log(props)
const getData = props.getSmurfs;

useEffect(() => {
    getData();
}, [getData]);

return (
    <div className="smurf-box">
    <div className="smurfs">
    
    </div>
    <button></button>
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