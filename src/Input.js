import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
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
                placeholder="Enter your gues here"
              />
            </form>
            <button
              type="submit"
              data-test="submit-button"
              className="submit-btn"
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

export default connect(mapStateToProps)(Input);
