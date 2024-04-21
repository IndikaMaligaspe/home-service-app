import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import { ClerkProvider , SignedIn, SignedOut} from '@clerk/clerk-expo';
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";

import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Login from './App/Screens/LoginScreen/Login';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });


  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
 
  
  return (
    <RootSiblingParent>
      <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_a2Vlbi1tdXR0LTY4LmNsZXJrLmFjY291bnRzLmRldiQ'> 
        <View style={styles.container} >
          <SignedIn>
            <NavigationContainer >
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <Login style={styles.container}/>
          </SignedOut>
          <StatusBar style="auto" />
        </View>
        </ClerkProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    // alignItems:'center'
  },
});
