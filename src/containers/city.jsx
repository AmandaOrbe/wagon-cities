import React, {Component} from 'react';


class Gif extends Component{
  render(){

    // const src = `https://media2.giphy.com/media/${this.props.id}/giphy.webp`
    return(
      <div className="">
        <h3>{this.props.name}</h3>
        <p>{this.props.address}</p>
      </div>
      )
  }
}

export default Gif;
