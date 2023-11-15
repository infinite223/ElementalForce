import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './src/utils/colors';
import { useState } from 'react'
import Game from './src/screens/GameScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [showGame, setShowGame] = useState(false);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        {showGame&& 
          <Game/>
        }
        
        <Text style={styles.appName}>
          Elemental
          <Text style={{color: colors.provideColor}}>
            Force
          </Text>
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => setShowGame(true)}
        >
          <Text style={styles.buttonText}>
            Wejdź do gry
          </Text>
        </TouchableOpacity> 

        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  appName: {
    fontSize: 30,
    fontWeight:'900',
    fontStyle: 'italic'
  },
  button: {
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.provideColor
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
});
