'use strict';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation, route }) => {
  return (
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Home Screen', { name: 'test' })
      }
    />
  );
};

const HomeScreen = ({ navigation }) => {
  return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
    <Text>Welcome back! {'\n'}
    Item expiring soon: BLANK expires on BLANK{'\n'}
    A recommended meal for today is: BLANK using BLANK and BLANK ingredients{'\n'}</Text>

                 <Button
                    title="Recommended Purchases"
                    onPress={() => navigation.navigate('Login Screen')
                    }/>

              <Button
                 title="Add Groceries"
                 onPress={() => navigation.navigate('Login Screen')
                 }/>

                        <Button
                           title="View Local Options"
                           onPress={() => navigation.navigate('Login Screen')
                           }/>

                                  <Button
                                     title="Settings/Preferences"
                                     onPress={() => navigation.navigate('Login Screen')
                                     }/>

                                   <Button
                                     title="Logout"
                                     onPress={() =>
                                       navigation.navigate('Login Screen')
                                     }
                                   />
        </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;