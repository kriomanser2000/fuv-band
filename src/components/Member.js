import React, { Component } from 'react';
class Member extends Component 
{
  render() 
  {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Member;