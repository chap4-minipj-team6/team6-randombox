import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <PageLayout>
        <Header />
        {children}
      </PageLayout>
    </>
  );
};

export default Layout;

const PageLayout = styled.div`
  min-width: 400px;
  height: 100%;
  margin: auto;
`;
