import React, { useState } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';
import AppLoading from 'expo-app-loading';

const getFonts = async () => {
  await Font.loadAsync({
    // Load a font `Montserrat` from a static resource
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),

    // Any string can be used as the fontFamily name. Here we use an object to provide more control
    'nunito-bold': {
      uri: require('./assets/fonts/Nunito-Bold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}