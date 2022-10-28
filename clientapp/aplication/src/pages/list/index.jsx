import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Item from '../../components/item/index'
import { customButtonClick as Button } from '../../components/button/index'

import style from './style'

import divideItem from '../../resources/divideItemsFunction'

function List() {


    let [Data, setData] = useState([])

    let [countPage, setCountPage] = useState(0)

    function loadData() {

        axios.get('http://localhost:4000/listpost')

        .then(res => {

                if (res.data) {

                    let tmp = res.data.map((el, index) => <Item item={el} key={index} style={style.item} />)

                    setData(divideItem(tmp, 0, 6))
                }
            })

        .catch(e => { console.error(e.message) })

        console.log(Data)
    }



    useEffect(() => {

        loadData()

    }, [])



    return (

        <div style={style.div}>

            <nav style={style.nav}>

                <Button type='button' style={style.button} value='Back'
                    clickListener={() => { setCountPage(countPage ? countPage - 1 : Data.length - 1) }}
                />

                <Button type='button' style={style.button} value='Next'
                    clickListener={() => { setCountPage(countPage < Data.length - 1 ? countPage + 1 : 0) }}
                />

            </nav>
            <section style={style.sec}>

                <h1 style={style.h1}>List of all Posts</h1>

                <div style={style.itemsBox}>

                    {
                        Data.length ?

                            Data[countPage]

                            : [0, 0, 0, 0, 0, 0].map((_, index) => <Item isEmpty={true} style={{ notFound: style.item.notFound }} key={index} />)
                    }

                </div>

            </section>
        </div>
    )
}


export default List