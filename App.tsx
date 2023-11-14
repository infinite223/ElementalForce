import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './src/Utils/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>
        Elemental
        <Text style={{color: colors.provideColor}}>
          Force
        </Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Wejdź do gry
        </Text>
      </TouchableOpacity> 

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
