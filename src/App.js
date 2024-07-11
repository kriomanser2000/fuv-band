import React, { Component } from 'react';
import Band from './components/Band';
import Track from './components/Track';
class App extends Component 
{
  render() 
  {
    const bandInfo = 
    {
      name: "Mörkvind",
      members: 
      [
        { name: "Sjöström -	Bass, Drums (?-2023)" },
        { name: "Vindur -	All instruments, Vocals" },
      ],
      albums: 
      [
        { name: "Det är bara oss - Full-length	2019", image: "fav-band/src/components/images/Det är bara oss.jpg" },
        { name: "Undergång -	EP	2021", image: "" },
        { name: "Höstbränder - Full-length	2023", image: "fav-band/src/components/images/Höstbränder.jpg" },
        { name: "Wyrd -	EP 2023", image: "fav-band/src/components/images/Wyrd.jpg" },
        { name: "Hypnotiskt vanvett av skogens irrgångar -	EP 2024", image: "fav-band/src/components/images/Hypnotiskt vanvett av skogens irrgångar.jpg" },
      ],
    };
    const trackInfo = 
    {
      title: "Stjärnhimlen däruppe",
      youtubeLink: "https://www.youtube.com/watch?v=w-idnzwW4iw&list=OLAK5uy_lat_XksWgHERK4MFXJ1Vz0pnTq1oI4pvI&index=3"
    };
    return (
      <div className="App">
        <Band name={bandInfo.name} members={bandInfo.members} albums={bandInfo.albums} />
        <Track title={trackInfo.title} youtubeLink={trackInfo.youtubeLink} />
      </div>
    );
  }
}
export default App;