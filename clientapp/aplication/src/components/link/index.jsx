import { Link } from "react-router-dom";
import React, { useState } from "react";

import style from './style.js'

function link(props){

    let [hover, setHover] = useState(false)


    return (

        <Link 
        to={props.To} 
        
        style={{ ...style.link , ...(hover ? style.link.hover : null)}} 

        onMouseEnter={ () => setHover(true)} 

        onMouseLeave= { () => setHover(false)}> 
        
        {props.content} 
        
        </Link>
    )
}

export default  link 