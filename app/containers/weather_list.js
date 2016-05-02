import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component{    
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart color={"red"} data={temps} units="K" /></td>
                <td><Chart color={"green"} data={pressures} units="hPa"/></td>
                <td><Chart color={"blue"} data={humidities} units="%" /></td>
            </tr>
        );
    }
    
    render() {        
        return ( 
            <table className="table table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>City</th>
                        <th>Tempreture (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){ // { state.weather }
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);