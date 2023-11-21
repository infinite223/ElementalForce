import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './src/utils/colors';
import { useEffect, useState } from 'react'
import Game from './src/screens/GameScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SelectElementalAndChampion from './src/screens/SelectElementalAndChampion';
import { store } from './store';
import { Provider } from 'react-redux';
import { selectGameState } from './src/slices/gameStateSlice';
import { useSelector } from 'react-redux'
import client from './src/appWriteConfig';

export default function App() {
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {  
    const unsubscribe = client.subscribe(`account`, response => {
      console.log(response.channels)
      // databases.${DATABASE_ID}.collections.${collectionId}.documents.${"655d1b1fb23f07950c13"}
        // if(response.events.includes("databases.*.collections.*.documents.*.create")){
        //     console.log('A MESSAGE WAS CREATED')
        //     console.log(response.payload, "a")
        // }

        // if(response.events.includes("databases.*.collections.*.documents.*.delete")){
        //     console.log('A MESSAGE WAS DELETED!!!')
        //     console.log(response.payload, "d")
        // }
    });

    console.log('unsubscribe:', unsubscribe)
  
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <View style={styles.container}>
          {showGame&& 
            <SelectElementalAndChampion/>
          }

          <Game/>
          
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
      </Provider>
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
