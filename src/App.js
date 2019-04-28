import React from 'react';
import Character from "./components/Character";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  render() {
    const mapCharacters =
      characters.map(character => {
        return <Character name={character.name} image={character.image} />
      })

    return (
      <div className="container-fluid">
        <h1>Clicky Game</h1>
        {mapCharacters}
      </div>
    );
  }
}

export default App;
