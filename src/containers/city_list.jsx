import React, { Component } from 'react';
import City from './city.jsx';


class CityList extends Component{

  renderList = () => {
    return this.props.cities.map(city =>  <City name={city.name} address={city.address}  key={city.slug}/>)
  }

  render(){
    return (
      <div className="city-list">
        {this.renderList() }
      </div>
    );

  }
}

export default CityList;
