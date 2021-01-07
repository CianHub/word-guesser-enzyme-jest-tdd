import { shallow } from 'enzyme';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Action, CombinedState, Store } from 'redux';
import { actionTypes } from '../../actions';

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
  const [val, setVal] = useState('');
  const contents = state?.successReducer.success ? null : (
    <form className="form-inline">
      <input
        data-test="component-input-element"
        className="mb-2 mx-sm-3"
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Guess a word"
      />
      <button
        type="submit"
        data-test="component-submit-button"
        className="btn btn-primary mb-2"
        onClick={() =>
          store?.dispatch({ type: actionTypes.GUESS_WORD, payload: val })
        }
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
