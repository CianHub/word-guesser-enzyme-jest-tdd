import { shallow } from 'enzyme';
import React from 'react';
import { connect } from 'react-redux';
import { Action, CombinedState, Store } from 'redux';

interface Props {
  store?: Store<
    CombinedState<{
      successReducer: boolean;
    }>,
    Action<any>
  >;
}

const Input: React.FC<Props> = () => {
  return (
    <div>
      <button></button>
    </div>
  );
};

const mapStateToProps = (state: boolean) => {
  return {};
};

export default connect(mapStateToProps)(Input);
