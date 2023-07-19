import { View } from 'react-native';
import ControlBar from './components/control-bar/ControlBar';
import {StyledMainScreen} from './MainScreen';
import HomePage from './pages/home-page/HomePage';
import { useState } from 'react';
import ScreenController from './components/screen-controller/ScreenController';

const App = () => {

  return (
    <StyledMainScreen>
      <ScreenController />
    </StyledMainScreen>
  );
}

export default App;

