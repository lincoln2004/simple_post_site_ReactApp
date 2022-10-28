import React, { useState } from 'react'

function Item({ style, isEmpty, item }) {

    let element = < DataTemplate style={style} item={item} />

    let empty = <article style={style.notFound} > Not found it</article>

    return (

        isEmpty ? empty : element

    )
}

function ClickEffect({ children, style }) {

    let [click, setClick] = useState(false)

    let show = {

        width: '100vw', height: '100vh',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center', background: 'rgba(0, 0, 0, 0.9)',

        position: 'fixed', top: '0', left: '0'
    }

    let normal = style


    return (

        <div style={click ? show : normal }
            onClick={() => setClick(!click)}>
            {children}
        </div>
    )
}

function DataTemplate(props) {



    return (

        <ClickEffect style={props.style.clickEffect}>

            <article style={props.style.body || null}>

                <div style={props.style.fieldset || null}>

                    <h3 style={props.style.title || null}>{props.item.title || null}</h3>

                    <p style={props.style.author || null}>{props.item.author || null}</p>
                </div>

                <p style={props.style.text || null}>{props.item.text || null}</p>
            </article>
        </ClickEffect>
    )
}




export default Item