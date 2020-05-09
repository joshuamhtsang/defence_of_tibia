import React from 'react';

import './FillableBar.css'

const FillableBar = (props) => {
    let percentage = props.value / props.max * 100;
    let text_value = props.value + '/' + props.max;
    return (
      <div className="fillable-bar" style={{height: `${props.height}px`}}>
        <Filler percentage={percentage} text_value={text_value} color={props.color} height={props.height}/>
      </div>
    )
}
  
const Filler = (props) => {
    return (
        <div className="filler" 
            style={{ background: `${props.color}`, width: `${props.percentage}%`, height: `${props.height}px`, fontSize: `${props.height}px`}}> {props.text_value}
        </div>
    )
}

export default FillableBar;
