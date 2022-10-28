import React, { useState, useEffect } from "react"
import axios from 'axios'

import style from './style.js'

import logo from '../../resources/logo_reactProject.svg'

import Item from '../../components/item/index.jsx'

function Home() {


    let [Data, setData] = useState([])

    function getItems() {


        axios.get('http://localhost:4000/listpost')

            .then((res) => {


                if (res.data) {

                    setData(res.data.map((el, id) => <Item item={el} key={id} style={style.item} />))
                }
            })

            .catch(e => console.log(e))


    }

    useEffect(() => {

        getItems()

    }, [])

    return (

        <div id='homePage' style={style.root}>
            <section id='sec1' style={style.sec1}>

                <h1 id='title' style={style.title}>Seja Bem Vindo!</h1>

                <img src={logo} alt="home" id='image' style={style.image} />

                <p id='text1' style={style.text1}>Veja os novos posts, ou disponiveis no momento logo abaixo</p>

                <div id='empty1' style={style.empty1}></div>

            </section>

            <section className="sec2" style={style.sec2}>

                <div style={style.boxItems}>

                    {
                        (Data && Data.length) ? Data.slice(-3).reverse()

                            : [0, 0, 0].map((_, index) => <Item isEmpty={true} style={{ notFound: style.item.notFound }} key={index} />)
                    }

                </div>

            </section>
        </div>
    )
}




export default Home