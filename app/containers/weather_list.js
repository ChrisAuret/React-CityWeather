import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{    
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15 );
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //const lon = cityData.city.data.coord.lon;
        //const lat = cityData.city.data.coord.lat;
        const {lon, lat} = cityData.city.coord;
        
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart color={"red"} data={temps} units="°C" /></td>
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
                        <th>Tempreture (°C)</th>
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