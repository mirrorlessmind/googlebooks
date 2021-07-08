import React from "react";
import "./style.css";

const BtnSave = (props) => {
    return (
        <div className="BtnSave">
            <button 
            type="button" 
            className={`btn btn-success ${props["data-value"]}`}
            {...props}
            >
            Save
            </button>
        </div>
    );
}

export default BtnSave;