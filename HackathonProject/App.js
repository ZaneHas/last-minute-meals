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
  Button,
  TextInput,
  FlatList
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
    const [value, onChangeText] = React.useState();

    const [pass_value, onChangePassText] = React.useState();


  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
          }}>
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  placeholder="username"
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  id="username_field"
                />
                      <TextInput
                        secureTextEntry={true}
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder="password"
                        onChangeText={text => onChangePassText(text)}
                        value={pass_value}
                        id="password_field"
                      />
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Home Screen', { name: 'test' })
      } />

          <Button
            title="Register"
  //          onPress={() =>
  //            navigation.navigate('Home Screen', { name: 'test' })
          //  }
             />
    </View>
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
    <Text
            style={{
                fontSize: 16,
                backgroundColor: '#00FFFF'
            }}>
    Welcome back! {'\n'}
    Item expiring soon: BLANK expires on BLANK{'\n'}
    A recommended meal for today is: BLANK using BLANK and BLANK ingredients{'\n'}</Text>

                                  <Button
                                     title="View Virtual Fridge"
                                     onPress={() => navigation.navigate('Virtual Fridge', { array: [{key: 'milk'}, {key: 'ground beef'}] })
                                     }/>

              <Button
                 title="Scan Grocery Receipt"
                 onPress={() => navigation.navigate('Scan Grocery Receipt')
                 }/>

                        <Button
                           title="View Recepies"
                           onPress={() => navigation.navigate('Local Options')
                           }/>

                 <Button
                    title="Recycling and Compost Tips"
                    onPress={() => navigation.navigate('Recycling Tips')
                    }/>





                                  <Button
                                     title="Settings/Preferences"
                                     onPress={() => navigation.navigate('Settings')
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

const ScanGroceryReceipt = ({ navigation, route }) => {

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>

                                                  <Button
                                                     title="Scan Your Receipt" />

                                                   <Button
                                                     title="Select an Image"
                                                     onPress={() =>
                                                      console.log("hi")
                                                     }
                                                   />
    </View>
  );
};

const RecyclingTips = ({ navigation, route }) => {

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
                <Text>hi</Text>
    </View>
  );
};

const Settings = ({ navigation, route }) => {

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
                <Text>hi</Text>
    </View>
  );
};

const LocalOptions = ({ navigation, route }) => {

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
                         <Button
                            title="Recommended Recepies"
                            />

                      <Button
                         title="Eco-Friendly Recepies"
                         />

                                <Button
                                   title="All Recepies"
                                   />

    </View>
  );
};

const VirtualFridge = ({ navigation, route }) => {

const array = route.params.array;
console.log("arr: ",array);

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
                <Text>Refrigorator List:</Text>
                <FlatList
                data={array}
                renderItem={({item}) =>
                <Text>{item.key}</Text>}
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
        <Stack.Screen name="Recycling Tips" component={RecyclingTips} />
        <Stack.Screen name="Scan Grocery Receipt" component={ScanGroceryReceipt} />
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Local Options" component={LocalOptions}/>
        <Stack.Screen name="Virtual Fridge" component={VirtualFridge}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;