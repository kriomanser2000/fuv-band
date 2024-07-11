import React, { Component } from 'react';
class Album extends Component 
{
  render() 
  {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt={this.props.name} width="200" />
      </div>
    );
  }
}
export default Album;