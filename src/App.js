import React from 'react';
import Character from "./components/Character";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    characters: characters
  }

  shuffleCharacters = () => {
    const shuffledCharacters = this.shuffle(characters);
    this.setState({shuffledCharacters});
  }

  shuffle = (array) => {
    let currentIndex = array.length; 
    let tempVal;
    let randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }
  
    return array;
  }

  componentDidMount = () => {
    this.shuffleCharacters();
  }

  render() {
    const mapCharacters =
      characters.map(character => {
        return <Character name={character.name} image={character.image} key={character.name} shuffleCharacters = {this.shuffleCharacters} />
      })

    return (
      <div className="container-fluid">
        <NavBar /> 
        <div className="row row-center">
        <Header />
        </div>
        <main className="container">
          <div className="row row-center">
            {mapCharacters}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
