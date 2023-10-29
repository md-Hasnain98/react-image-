import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
    const [val, setVal] = useState(300);
    return ( <
        div id = "main" >
        <
        img src = { star }
        height = { `${val}+px` }
        width = { `${val}+px` }
        onClick = {
            () => {
                setVal((oldVal) => {
                    return oldVal + 2;
                })
            }
        }
        />  </div >
    )
}


export default App;