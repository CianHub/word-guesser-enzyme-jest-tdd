import React from 'react';

interface Props {
  success: boolean;
}
export const Congrats: React.FC<Props> = ({ success }) => {
  return (
    <div data-test="component-congrats">
      <span data-test="component-congrats-message">
        {success ? 'Congrats' : ''}
      </span>
    </div>
  );
};
