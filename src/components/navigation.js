import React from 'react';

function Navigation(props){
    console.log('props', props)
    return(
        <ul>
            {
                props.menu ?
                props.menu.map((item, index) => {
                    return <li key={index}>{item}</li>
                }) : 'nothing to render'
            }
           
        </ul>
    )
}

export default Navigation;