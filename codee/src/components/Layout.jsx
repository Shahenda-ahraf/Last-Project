import React from 'react';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode);

return <div className={`layout ${theme}`}>{children}</div>;
};

export default Layout;