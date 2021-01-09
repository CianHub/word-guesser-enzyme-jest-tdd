import React, { useState } from 'react';

interface Props {}

const Input: React.FC<Props> = () => {
  const contents = (
    <form className="form-inline">
      <input
        data-test="component-input-element"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="Guess a word"
      />
      <button
        type="submit"
        data-test="component-submit-button"
        className="btn btn-primary mb-2"
      >
        Submit
      </button>
    </form>
  );

  return <div data-test="component-input">{contents}</div>;
};

export default Input;
