import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import Map from '../components/map.js';

 class WeatherList extends Component {
     renderWeather(cityData){
      const name = cityData.city.name;
      const {lat,lon} = cityData.city.coord;
      const temps = cityData.list.map(weather=>weather.main.temp);
      const pressures = cityData.list.map(weather=>weather.main.pressure);
      const humidities = cityData.list.map(weather=>weather.main.humidity);
      return(
          <tr key={name}>
            <td>
            <Map lat={lat} lon={lon}/>
            </td>
            <td>
               <Chart data={temps} color="orange"/>
            </td>
             <td>
               <Chart data={pressures} color="green"/>
            </td>
             <td>
               <Chart data={humidities} color="black"/>
            </td>
          </tr>
      );          
     }
     
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City </th>
                        <th>Temperature (Celcius)</th>
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

function mapStateToProps({weather}) {
    return{weather};
}

export default connect(mapStateToProps)(WeatherList);
