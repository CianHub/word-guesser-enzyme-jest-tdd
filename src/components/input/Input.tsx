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
    }>,
    Action<any>
  >;
  success: boolean;
}

const Input: React.FC<Props> = ({ success }) => {
  const contents = success ? null : (
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
