import React, { Component } from 'react';
class Track extends Component 
{
  render() 
  {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <iframe width="560" height="315" src={this.props.youtubeLink} title={this.props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }
}
export default Track;