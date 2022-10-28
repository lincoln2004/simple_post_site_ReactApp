import React, { useState } from "react";

import style from './style'

import axios from 'axios'

import { customButtonClick as CustomButton } from '../../components/button/index'

function mapForm(el) {

    if (el.type !== 'submit' && el.name !== '') {

        return [el.name, el.value]
    }
    return false

}

function Msg(props) {

    let element = <div id='msg' style={style.msg.show} onClick={props.click}>

        <h1 style={style.msg.childs.h1}>New Post created:</h1>
        <p style={style.msg.childs.p}>Title: {props.data.title}.     Author: {props.data.author}.</p>


    </div>

    return (

        !props.hide ? element : null
    )
}


function create() {

    let [newpost, setNewpost] = useState({ title: 'none ', author: 'none' })
    let [hide, setHide] = useState(true)

    async function formSubmit(e) {

        e.preventDefault()

        let fields = Array.from(e.target.elements).map(mapForm).filter((el) => el)

        let data = Object.fromEntries(fields)

        console.log(data)
        try {
            await axios.post('http://localhost:4000/createpost', { ...data })



            setNewpost({ title: data.title || 'none', author: data.author || 'none' })
            setHide(!hide)

            console.log(hide, newpost)
        } catch (error) {

            console.log(error)
        }
    }

    return (

        <section id='createPageSection' style={style.sec}>

            <Msg hide={hide} data={newpost} click={() => { setHide(!hide); }} />

            <form action="#" method="post" style={style.form} onSubmit={formSubmit}>

                <fieldset style={style.fieldset.normal}>

                    <label htmlFor="title" style={style.label}>  <p style={style.p}>Title:</p>

                        <input type="text" name="title" id="title" style={style.inputs.text} />

                    </label>

                    <label htmlFor="author" style={style.label}>  <p style={style.p}>Author:</p>

                        <input type="text" name="author" id="author" style={style.inputs.text} />

                    </label>

                    <CustomButton type='submit' style={style.inputs.submit} value='Criar Post' />

                </fieldset>

                <fieldset style={style.fieldset.Text}>

                    <p style={style.p}>Text:</p>

                    <textarea name="text" id="" style={style.textarea}></textarea>

                </fieldset>

            </form>

        </section >
    )
}



export default create