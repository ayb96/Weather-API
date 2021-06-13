import React from 'react';
import clear from '../img/weather-icons/clear.svg';
import './weatherItem.css'

const weathers = (props) => {

    return(
        <div > 
        <div className = "weather1">
          <img src={clear} alt="clear" className="img1"/>
          </div>
          <div class="description12">
            <div class="description1 style1"> overcase clouds</div>
            <div class="description1">temperature &nbsp;10 &deg; to 11&deg;C </div>
            <div class="description1">Humidity&nbsp;&nbsp; 78% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pressure &nbsp;&nbsp;1008.48</div>
          </div>
        </div>
    )

}
export default weathers