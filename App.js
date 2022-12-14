/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Home from './screens/Home';
 import {createStackNavigator} from '@react-navigation/stack';
 import DisneyCharactersDetails from './screens/DisneyCharactersDetails';
 import {NavigationContainer} from '@react-navigation/native';
 
 const Stack = createStackNavigator();
 
 const App = () => {
   return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="DisneyCharactersDetails" component={DisneyCharactersDetails} />
         </Stack.Navigator>
       </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({});
 
 export default App;
 