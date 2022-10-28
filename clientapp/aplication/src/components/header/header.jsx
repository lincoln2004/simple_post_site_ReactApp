import React, { useState } from 'react';

import style from './style.js'

import menu from '../../resources/menu_icon.svg'

import Link from '../link/index.jsx';

function header(props) {


  let [MenuOpen, setMenuOpen ] = useState(false)

  const menuClick = () => {setMenuOpen(!MenuOpen) }
  

  return (<>

    <header style={style.header}>

      <h1 style={style.h1}>Titulo Logo</h1>

      <span style={style.spanMenu} onClick={menuClick}>{<img src={menu} alt="menu" />}</span>

    </header>

    <Menu state={MenuOpen} onClick={menuClick}/>

  </>);
}




function Menu(props) {


  let open = <div id='backgroundMenu' style={style.menu.background} onClick={props.onClick}>

    <div id='menuBox' style={style.menu.box}>

      <nav style={style.menu.nav}>

        <Link To='/' content='Home Page'/>
        <Link To='listpost' content='List of entire Posts'/>     
        <Link To='createpost' content='To Write a new Post'/>

      </nav>

      <div id="empty2" style={style.menu.empty}></div>
    </div>
  </div>

  return (
    (props.state) ? open : null
  )
}


export default header;
