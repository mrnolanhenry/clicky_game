import React from 'react';
import Character from "./components/Character";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    characters: characters,
    guessMessage: "",
    score: 0,
    topScore: 0
  }

  markCharacter = (id) => {
    const thisCharacter = this.state.characters.filter(character => character.id === id);
    const thisIndex = this.state.characters.findIndex(this.matchCharacter);
    console.log(thisCharacter, thisIndex);
    let updatedCharacters = [];

    for (let i=0; i < this.state.characters.length; i++) {
      if (i === thisIndex) {
        const updatedCharacter = this.state.characters[i];
        updatedCharacter.marked = true;
        updatedCharacters.push(updatedCharacter);
      }
      else {
        updatedCharacters.push(this.state.characters[i])
      }
    }

    thisCharacter.marked = true;

    this.setState({ characters: updatedCharacters });
  }

  matchCharacter = (element,id) => {
    return element.id === id;
  }


  handleCharacterClick = (id) => {
    this.markCharacter(id)
    this.shuffleCharacters();
  }

  shuffleCharacters = () => {
    const shuffledCharacters = this.shuffle(characters);
    this.setState({ characters: shuffledCharacters });
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
    this.setState({ guessMessage: "Click an Image to Begin!" })
  }

  render() {
    const mapCharacters =
      characters.map(character => {
        return <Character name={character.name} image={character.image} key={character.id} id={character.id} marked={character.marked} handleCharacterClick={this.handleCharacterClick} />
      })

    return (
      <div className="container-fluid">
        <NavBar guessMessage={this.state.guessMessage} score={this.state.score} topScore={this.state.topScore} />
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
