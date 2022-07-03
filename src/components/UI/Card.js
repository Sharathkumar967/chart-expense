import React from 'react'
import './Card.css';
const Card = (props) => {
    // string lo undhi kada card, card word  raska space ivvali 
    const classes = 'card ' + props.className   

  return (
    <div className={classes}>
     {props.children}
    </div>
  )
}

export default Card