import React from 'react';

const successContext = React.createContext<[boolean, () => {}] | null>(null);

const useSuccess = () => {
  const context = React.useContext(successContext);

  if (context === null) {
    throw new Error('useSuccess must be used with a Success.Provider');
  }

  return context;
};

const SuccessProvider = (props: any) => {
  const [success, setSuccess] = React.useState(false);

  const value = React.useMemo(() => [success, setSuccess], [success]);

  return <successContext.Provider value={value} {...props} />;
};

export default { SuccessProvider, useSuccess };
