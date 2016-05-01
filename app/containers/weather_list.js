import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    
    render(){        
        return ( 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreture</th>
                        <th>Pressur</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){ // { state.weather }
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);