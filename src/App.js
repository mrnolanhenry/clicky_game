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

  updateCharacters = (id) => {
    let characters = [...this.state.characters];
    console.log('characters',characters,'this.state.characters',this.state.characters);
    // const char = this.state.characters.filter(character => character.id === id)[0];
    // console.log('char',char,'char.id',char.id,'id',id)

    // const thisIndex = this.state.characters.findIndex(this.matchCharacter);
    const thisIndex = this.state.characters.findIndex(character => character.id === id);
    characters[thisIndex].marked = true;

    console.log('characters[thisIndex]', characters[thisIndex], 'this.state.characters[thisIndex]', this.state.characters[thisIndex], 'thisIndex', thisIndex, 'characters', characters, 'this.state.characters', this.state.characters);
    this.setState({ characters: characters});
    return characters;
  }

  handleCharacterClick = id => {
    this.shuffleCharacters(this.updateCharacters(id));
    // this.setState({ characters: this.updateCharacters(id) });
    // const shuffledCharacters = this.shuffle(characters);
    // this.setState({ characters: shuffledCharacters });
  }

  shuffleCharacters = (characters) => {
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
    this.shuffleCharacters(this.state.characters);
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
