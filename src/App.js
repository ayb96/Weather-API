import React, { Component } from "react";
import Weathers from './Component/wehterItem.js';
import Search from './Component/search.js';
import Content from './Component/Content.js';
import fake from './data/fakeWeatherData.json';



class App extends Component {
state = {
  humidity: fake.list[0].main.humidity,
  tempmin: fake.list[0].main.temp_min,
  tempmax: fake.list[0].main.temp_max,
  pressure: fake.list[0].main.pressure,
  description: fake.list[0].weather[0].description,
  

  }
  
   
render() {
   return (
      
      <div className="app">
        
        <Search />
        <Weathers pressure={this.state.pressure} description={this.state.description}/>
        <Content/>
        
        
      </div>
     
    );
  }
}


export default App;