import React from 'react';
import { GlobalStyles } from './components/GlobalStyles.style';
import { AppContainer } from './components/AppContainer.style';
import NavBarContent from './components/NavBarContent';
import { NavBar } from './components/NavBar.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar />
    </AppContainer>
  );
}

export default App;
