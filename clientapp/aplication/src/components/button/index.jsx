import React, { useState } from 'react'



function customButtonHover(props) {

    let [hover, setHover] = useState(false)


    return (
        <input
            type={props.type}

            style={{ ...props.style.button, ...(hover ? props.style.hover : null) }}

            onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}

            name={props.name || null} id={props.id ||  null}  value={props.value}
        />
    )
}

function customButtonClick(props) {

    let [hover, setHover] = useState(false)

    
    return (
        <input
            type={props.type}

            style={{ ...props.style.button, ...(hover ? props.style.hover : null) }}

            onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}

            onClick={props.clickListener || null}

            name={props.name || null} id={props.id ||  null}  value={props.value}
        />
    )
}

export { customButtonHover, customButtonClick}