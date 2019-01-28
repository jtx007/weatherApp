import React, { Component } from 'react'
import Skycons from 'react-skycons'

export default class DayPanel extends Component {

    convertIconFormat = (icon) => {
        let newIcon = icon.toUpperCase().split("-").join("_")
        return newIcon
    }

    convertEpochToDate = (val) => {
        let myDate =  new Date(val * 1000)
        myDate.toString()
        return myDate
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>{(this.props.weather.time)}</p>
                <Skycons
                color='black'
                icon={this.convertIconFormat(this.props.weather.icon)}
                autoplay={true}
                />
                <strong><p className="high-low-temperatures">{Math.round(this.props.weather.temperatureMax)}˚ {Math.round(this.props.weather.temperatureMin)}˚</p></strong>
                <p>{this.props.weather.summary}</p>
                <p>UV Index: {this.props.weather.uvIndex}</p>
                <p>Humidity: {Math.floor(this.props.weather.humidity*100)}%</p>
                <p>Windspeed: {this.props.weather.windSpeed} mph</p>
                <p>Visibility: {this.props.weather.visibility}</p>
                <p>Pressure: {this.props.weather.pressure}</p>
                <p>Sunrise: {this.props.weather.sunriseTime}</p>
                <p>Sunset: {this.props.weather.sunsetTime}</p>
            </div>
        )
    }
}