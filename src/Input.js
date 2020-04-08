import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions/index";

export class UnConnectedInput extends Component {

  /**
   * Create ref for the input box
   * @method constructor
   * @param {object} props  - Component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    // get the value of what is in the input box
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  /**
   * Render the component
   * @method render
   * @returns {JSX.Element} - Rendered Component
   */
  render() {
    return (
      <div data-test="component-input">
        {this.props.success === false ? (
          <>
            <form className="guessInput">
              <input
                type="text"
                id="guessWord"
                data-test="input-box"
                ref={this.inputBox}
                placeholder="Enter your gues here"
              />
            </form>
            <button
              type="submit"
              data-test="submit-button"
              className="submit-btn"
              onClick={this.submitGuessedWord}
            >
              Submit 
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnConnectedInput);
