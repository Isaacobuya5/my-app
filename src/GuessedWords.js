import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    return (
        <div data-test="component-guessed-word">
        {props.guessedWords.length === 0 ? 
        (
            <span data-test="guess-instructions">Try to gues a secret word</span>
        ) : (
            <>
            <h3 className="guess-header">Guessed Words</h3>
            <table data-test="guessed-words" className="guesses-table">
                <thead>
                    <tr><th>Guess</th><th>Matching letters</th></tr>
                </thead>
                <tbody>
                {props.guessedWords.map(({guessedWord, letterMatchCount},index) => (
                    <tr key={index} data-test="guessed-word" className="guessed-word">
                        <td>{guessedWord}</td>
                <td>{letterMatchCount}</td>
                        </tr>
                ))  }
                </tbody>
                 </table>
                 </>
        )
        }
        </div>
    )
}

GuessedWords.propTypes = {
guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    }).isRequired,
)
};

export default GuessedWords;