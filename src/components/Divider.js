import React from "react";
import '../styles/Styles.css'
import richlogo from '../assets/richlogo.png'

function Divider(){
    return(
        <div className="divider-container">
            <hr/>
            <div className="divider-img-container">
                <img src={richlogo} alt=''/>
            </div>
            <hr/>
        </div>
    )
}

export default Divider