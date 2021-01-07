import { shallow } from 'enzyme';
import React from 'react';
import { connect } from 'react-redux';
import { Action, CombinedState, Store } from 'redux';

interface Props {
  store?: Store<
    CombinedState<{
      successReducer: {
        success: boolean;
      };
      guessWordReducer: {
        guessWords: { guessWord: string; letterMatchCount: number }[];
      };
      secretWordReducer: { secretWord: string };
    }>,
    Action<any>
  >;
}

const Input: React.FC<Props> = ({ store }) => {
  const state = store?.getState();
  const contents = state?.successReducer.success ? null : (
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

const mapStateToProps = (state: boolean) => {
  return {};
};

export default connect(mapStateToProps)(Input);
