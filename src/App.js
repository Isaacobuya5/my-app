import React from 'react';
import { connect } from "react-redux";
import './App.css';


import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import { getSecretWord } from "./actions/index";

export class UnconnectedApp extends React.Component {

  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
  // get the secret word
  this.props.getSecretWord();
  }
  render() {
  return (
    
    <div className="App">
      <h1 className="header-title">Lotto Jotto App</h1>
      <div>The secret word is {this.props.secretWord}</div>
     <Congrats success={this.props.success} /> {/** initially = true */}
     <Input />
     <GuessedWords guessedWords={this.props.guessedWords} /> {/** initially = [
      {guessedWord: 'train', letterMatchCount: 3},
      {guessedWord: 'train', letterMatchCount: 3}
    ] */}
    </div>
  );
}
}

const mapStateToProps = (state) => {
const {success, guessedWords, secretWord} = state;
return {
  success,
  guessedWords,
  secretWord
}
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
