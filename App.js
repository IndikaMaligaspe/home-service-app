import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider , SignedIn, SignedOut} from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';


export default function App() {
  return (
   <ClerkProvider publishableKey='pk_test_a2Vlbi1tdXR0LTY4LmNsZXJrLmFjY291bnRzLmRldiQ'> 
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
