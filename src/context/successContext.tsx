import React from 'react';

const successContext = React.createContext<
  [boolean, (val: boolean) => void] | null
>(null);

const useSuccess = (): [boolean, (val: boolean) => void] => {
  const context = React.useContext(successContext);

  if (context === null) {
    throw new Error('useSuccess must be used with a Success.Provider');
  }

  return context;
};

const SuccessProvider = (props: any): JSX.Element => {
  const [success, setSuccess] = React.useState<boolean>(false);

  const value = React.useMemo(() => [success, setSuccess], [success]);

  return <successContext.Provider value={value} {...props} />;
};

export default { SuccessProvider, useSuccess };
