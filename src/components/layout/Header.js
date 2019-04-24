import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <header style ={headerstyle}>
            <h1>Gym Exercises todos</h1>
            <Link style={Linkstyle} to ="/">Home</Link> | <Link style={Linkstyle} to="/about">About</Link>
        </header>
    )
}

const headerstyle ={
    backgroundColor:'grey',
    color:'orange',
    fontSize:'1.6em',
    margin:'0px 0px',   
    textAlign:'center'

    
}


const Linkstyle ={
    color:'white',
}


export default Header