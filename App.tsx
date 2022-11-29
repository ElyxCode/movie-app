import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;

