'use strict';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import type {Node} from 'react';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios'
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
  FlatList,
  Linking,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function make_api_call(callback) {
  var fetch_string = '127.0.0.1/students';

      const headers = {
		"Accept": "application/json",
		"Content-Type": 'application/json',
      };

axios.get('http://calvinb4.pythonanywhere.com/', {headers})
  .then(function (response) {
  console.log(response.data)
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
/* g
  fetch('127.0.0.1/students', {
    method: 'GET',
             headers: {
		"Accept": "application/json",
		"Content-Type": 'application/json',
    },
  })//.then(response => response.json())
  .then((response) => {

    console.log("WE DID IT");
    console.log(response);
    console.log(response.content);

      callback(response);
    })
    .catch(error => {
      console.error(error);
    }); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  }})


const LoginScreen = ({ navigation, route }) => {
    const [value, onChangeText] = React.useState();

    const [pass_value, onChangePassText] = React.useState();

  // const logo = require('./images/LastMinuteMeals_Logo.png');
    const logo = require('./images/LastMinuteMeals_Banner1.png');
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
          }}>

           <Image source={logo} // Use item to set the image source
                            style={{
                              borderWidth:2,
                              width:null,
                              height:300,
                              borderColor:'#d35647',
                              resizeMode:'contain',
                              alignItems: 'center',
                              margin:8
                            }}
                          />

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

             <TouchableOpacity
             style={{width:100,
             height:100,
             justifyContent: 'center',
             borderRadius:100,
             alignItems:'center',
             backgroundColor:'orange',}}>
             <Text>Hello</Text>
             </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {

var expiring_soon = "Baby Arugula";
var date = "4/12/21";

var recommended_meal = "Mashed Potatoes with Vegetables";
var recommended_ingredient_1 = "Potatoes";
var recommended_ingredient_2 = "Baby Arugula";

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
    Item expiring soon: {expiring_soon} expires on {date}{'\n'}
    A recommended meal for today is: {recommended_meal} using ingredients: {recommended_ingredient_1} and {recommended_ingredient_2}{'\n'}</Text>

                                  <Button
                                     title="View Virtual Fridge"
                                     onPress={() => navigation.navigate('Virtual Fridge', { array: [{key: 'milk'}, {key: 'ground beef'}] })
                                     }/>

              <Button
                 title="Scan Grocery Receipt"
                 onPress={() => navigation.navigate('Scan Grocery Receipt')
                 }
                             style={{
                                 backgroundColor: '#d27d7d'
                             }}
                 />

                        <Button
                           title="View Recipes"
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

var json_data = '';

                                     make_api_call(function(response) {
                                                                  json_data = response;
                                                      console.log("?");
                                                                                  console.log(json_data);
                                                                               //   var a = json_data.data;
                                                                               //   console.log(a);
                                                                                });
var arr = []
//for ()

  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>

                                                  <Button
                                                     title="Scan Your Receipt"
                                                 />

                                                   <Button
                                                     title="Select an Image"
                                                 onPress={() => navigation.navigate('Confirm Items',  { array: [json_data] }) }

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
                <Text>Here are some link where you can learn more about how to recycle!</Text>

                      <Text style={{color: 'blue'}}
                      onPress={() => Linking.openURL('https://www.epa.gov/recycle/recycling-basics')}>
                      EPA Recycling Basics</Text>

                                       <Button
                                          title="Back"
                                          onPress={() => navigation.navigate('Home Screen')
                                          }/>
    </View>
  );
};

const Settings = ({ navigation, route }) => {
const [vegan_toggleCheckBox, vegan_setToggleCheckBox] = React.useState(false);
    const [vegetarian_toggleCheckBox, vegetarian_setToggleCheckBox] = React.useState(false);
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Only Show Vegan Recepies</Text>
                  <CheckBox
                    disabled={false}
                    value={vegan_toggleCheckBox}
                    onValueChange={(newValue) => vegan_setToggleCheckBox(newValue)}
                  />
          <Text>Only Show Vegetarian Recepies</Text>

                    <CheckBox
                      disabled={false}
                      value={vegetarian_toggleCheckBox}
                      onValueChange={(newValue) => vegetarian_setToggleCheckBox(newValue)}
                    />
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
                            title="Recommended Recipes"
                              onPress={() => navigation.navigate('Recipe List', { array: [{key: 'quiche'}, {key: 'beef taco'}] })   }
                            />

                      <Button
                         title="Eco-Friendly Recipes"
                                onPress={() => navigation.navigate('Recipe List', { array: [{key: 'quiche'}, {key: 'beef taco'}] })   }

                         />

                                <Button
                                   title="All Recipes"
                               onPress={() => navigation.navigate('Recipe List', { array: [{key: 'quiche'}, {key: 'beef taco'}] })   }

                                   />

    </View>
  );
};

const VirtualFridge = ({ navigation, route }) => {

const array = route.params.array;
console.log("arr: ",array);
var image_array = [{key: 'banana'}, {key: 'milk'},{key:'apple'}];

const [images, set_images] = React.useState([{key:require('./images/banana.jpg')},{key:require('./images/milk.jpg')},{key:require('./images/apple.jpg')}]);
var index = 0;
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              data={images}
              renderItem={ ({ item, index }) => (
                <Image source={item.key} // Use item to set the image source
                  key={index} // Important to set a key for list items
                  style={{
                    width:260,
                    height:300,
                    borderWidth:2,
                    borderColor:'#d35647',
                    resizeMode:'contain',
                    margin:8
                  }}
                />
                    )}



                  />

                <Text>Refrigerator List:</Text>
                <FlatList
                data={array}
                renderItem={({item}) =>
                <Text>{item.key}</Text>}
                />
    </View>
  );
};

const RecipeList = ({ navigation, route }) => {

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
                <Text>Recipe List:</Text>
                <FlatList
                data={array}
                renderItem={({item}) =>
                <Text>{item.key}</Text>}
                />
    </View>
  );
};

const ConfirmItems = ({ navigation, route }) => {

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
                <Text>Recipe List:</Text>
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
        <Stack.Screen name="Recipe List" component={RecipeList}/>
        <Stack.Screen name="Confirm Items" component={ConfirmItems} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;