import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component { or null if `succes' props is false}
 */
const Congrats = (props) => {
    return (
    props.success ? (
        <div data-test="component-congrats" className="success-message">
            <span data-test="congrats-message">
                Congratulations! You guessed the word!
            </span>
        </div>
    ) : (
        <div data-test="component-congrats"></div>
    )
    );
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;