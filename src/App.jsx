import React from 'react';
import { GlobalStyles } from './components/GlobalStyles.style';
import { AppContainer } from './components/AppContainer.style';
import { NavBar } from './components/NavBar.style';
import { HomeContainer } from './components/HomeContainer.style';
import { FilterContainer } from './components/FilterContainer.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar />
      <HomeContainer>
        <FilterContainer />
      </HomeContainer>
    </AppContainer>
  );
}

export default App;
