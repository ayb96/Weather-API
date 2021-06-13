import React from 'react';
import Fog from '../img/weather-icons/fog.svg';
import './hourly.css'

const hourlyContent = (props) =>{
    return(
        <div>
            <div>
                <p className="align">3:00</p>
                <img src={Fog} alt="clear" className="img2"/>
                <p className="align">27&deg;C</p>
            </div>

            
        </div>
    )
}

export default hourlyContent;