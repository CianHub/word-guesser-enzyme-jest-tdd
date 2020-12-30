import React from 'react';

interface Props {
  success: boolean;
}
export const Congrats: React.FC<Props> = ({ success }) => {
  return success ? (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="component-congrats-message">
        {success ? 'You got it!' : ''}
      </span>
    </div>
  ) : null;
};
