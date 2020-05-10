import React from 'react';
import FillableBar from './FillableBar';

import './Unit.css';

const Unit = (props) => {
    return(
        <div className='unit'>
            {props.name}
            <img src={props.picture}/>
            <FillableBar
                value={props.health}
                max={props.maxHealth}
                color='#ff0000'
                height='1'
                widthPercentage='90'
            />
        </div>
    )
}

export default Unit;
