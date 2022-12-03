import { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';


export default function App() {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <LottieView 
        autoPlay
        ref={animation}
        style={{
          width: 600,
          height: 200,
        }}
        source={require('./assets/128706-3-seconds-loader-beeboard.json')}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
        title='Restart Animation'
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
        }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
