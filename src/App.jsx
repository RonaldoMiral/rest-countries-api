import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppContainer } from './components/AppContainer.style';
import { NavBar } from './components/NavBar.style';
import { HomeContainer } from './components/HomeContainer.style';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <HomeContainer>
        {/* Allows you to reuse your code. Brings all the routes to here*/}
        <Outlet />
      </HomeContainer>
    </AppContainer>
  );
}

export default App;
