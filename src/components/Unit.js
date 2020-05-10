import React from 'react';
import FillableBar from './FillableBar';

const Unit = (props) => {
    return(
        <div> 
            {props.name},
            <FillableBar
                value={props.health}
                max={props.maxHealth}
                color='#ff0000'
                height='1'
            />
        </div>
    )
}

export default Unit;
