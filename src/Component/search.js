import React, { Component } from 'react';
import './search.css'

class search extends Component {  
    render() { 
        return(
            <div className="search1">
                <form onSubmit="weather()">
                    <div className="search2">
                        <input type="text" placeholder="Type in an city name" className="box"/>
                        <button type="submit" className="btn">Find Weather</button>
                    </div>
                </form>

            </div>
        );
    }
}



export default search;