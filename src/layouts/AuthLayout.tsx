import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<IProps> = ({ children }) => {
  React.useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (auth) {
    }
  }, [[]]);

  return <>{children}</>;
};

export default AuthLayout;
