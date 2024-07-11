import React, { Component } from 'react';
import Member from './Member';
import Album from './Album';
class Band extends Component 
{
  render() 
  {
    const { name, members, albums } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Members: </h2>
        {members.map((member, index) => 
        (
          <Member key={index} name={member.name} />
        ))}
        <h2>Albums: </h2>
        {albums.map((album, index) => 
        (
          <Album key={index} name={album.name} image={album.image} />
        ))}
      </div>
    );
  }
}
export default Band;