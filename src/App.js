import React from 'react';
import Character from "./components/Character";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    characters: characters,
    guessMessage: "Click an Image to Begin!",
    score: 0,
    topScore: 0
  }

  updateGame = (id) => {
    let characters = [...this.state.characters];
    const thisIndex = this.state.characters.findIndex(character => character.id === id);
    let isMarked = characters[thisIndex].marked
    let newMessage = "";

    // if guessed correctly, score will increase and messages will update
    if (!isMarked) {
      characters[thisIndex].marked = true;
      let newScore = this.state.score + 1;

      // if max score achieved, update message
      if (newScore === characters.length) {
        newMessage = "Max score achieved. You win!";
      }
      else {
        newMessage = "Correct!";
      }
      this.setState({ score: newScore, topScore: Math.max(newScore, this.state.topScore), guessMessage: newMessage })
    }
    // else reset score and update message
    else {
      newMessage = "Sorry! Play again?";
      this.setState({ score: 0, guessMessage: newMessage })
      characters.map(character => {
        character.marked = false;
        return character;
      });
    }
    this.setState({ characters: characters });
    return characters;
  }

  handleCharacterClick = id => {
    let shuffledCharacters = this.shuffleCharacters(this.updateGame(id));
    this.setState({ characters: shuffledCharacters });
  }

  shuffleCharacters = () => {
    const shuffledCharacters = this.shuffle(this.state.characters);
    return shuffledCharacters;
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
        return <Character name={character.name} image={character.image} key={character.id} id={character.id} marked={character.marked} handleCharacterClick={this.handleCharacterClick} />
      })

    return (
      <div className="container-fluid">
        <div className="container-fluid mask">
          <NavBar guessMessage={this.state.guessMessage} score={this.state.score} topScore={this.state.topScore} />
          <div className="row row-center">
            <Header />
          </div>
            <main className="container">
              <div className="row row-center character-row">
                {mapCharacters}
              </div>
            </main>
          </div>
      </div>
    );
  }
}

export default App;
