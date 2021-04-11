'use strict';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import type {Node} from 'react';
import CheckBox from '@react-native-community/checkbox';
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
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const image = { uri: "banana.png" };

const LoginScreen = ({ navigation, route }) => {
    const [value, onChangeText] = React.useState();

    const [pass_value, onChangePassText] = React.useState();

   //const logo = require('./images/LMM_logo_new.png');

    //const logo = require('./images/LastMinuteMeals_Banner1.png');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#b3e7dc'
          }}>
<ImageBackground source={require('./images/final_login_page.jpg')} style={styles.image}>


                <TextInput
                  style={{height: 40,borderColor: 'gray', borderWidth: 1}}
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
         color='#6c0102'
        onPress={() =>
            navigation.navigate('Home Screen', { name: 'test' })
      } />

          <Button
            title="Register"
            color = "#6c0102"
  //          onPress={() =>
  //            navigation.navigate('Home Screen', { name: 'test' })
          //  }
             />
</ImageBackground>
    </View>
  );
};


const HomeScreen = ({ navigation }) => {
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 390

  }
                 });
  return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#b3e7dc',
        }}>
<ImageBackground source={require('./images/final_home_page.jpg')} style={styles.image}>
    <Text
            style={{
                fontSize: 16,
                color: '#6c0102',
                alignContent: 'flex-start'
            }}>
    Welcome back! {'\n'}
    Item expiring soon: bananas expire on 04-17-21{'\n'}
    A recommended meal for today is: Banana Pancakes using bananas, milk, and eggs.{'\n'}</Text>

                                  <Button
                                     title="View Virtual Fridge"
                                     color='#6c0102'

                                     onPress={() => navigation.navigate('Virtual Fridge', { array: [{key: 'Bananas'}, {key: 'Milk'}, {key: 'Onion'}, {key: 'Eggs'}, {key: 'Pineapple'},{key: 'Garlic'}, {key: 'Butter'}, {key: 'Lemon'}] })
                                     }/>

              <Button
                 title="Scan Grocery Receipt"
                 color='#6c0102'
                 onPress={() => navigation.navigate('Scan Grocery Receipt')
                 }/>

                        <Button
                           title="View Recipes"
                           color='#6c0102'
                           onPress={() => navigation.navigate('Local Options')
                           }/>

                 <Button
                    title="Recycling and Compost Tips"
                    color='#6c0102'
                    onPress={() => navigation.navigate('Recycling Tips')
                    }/>





                                  <Button
                                     title="Settings/Preferences"
                                     color='#6c0102'
                                     onPress={() => navigation.navigate('Settings')
                                     }/>

                                   <Button
                                     title="Logout"
                                     color='#6c0102'
                                     onPress={() =>
                                       navigation.navigate('Login Screen')
                                     }
                                  />
</ImageBackground>
        </View>
  );
};

const ScanGroceryReceipt = ({ navigation, route }) => {
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 400

  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: 'auto',
            backgroundColor: "#b3e7dc"
          }}>
          <ImageBackground source={require('./images/generic_background_1.jpg')} style={styles.image}>

                                                  <Button
                                                     title="Scan Your Receipt"
                                                     color='#6c0102'/>


                                                   <Button
                                                     title="Select an Image"
                                                     color='#6c0102'
                                                     onPress={() =>
                                                      console.log("hi")
                                                     }
                                                   />
          </ImageBackground>
    </View>
  );
};

const RecyclingTips = ({ navigation, route }) => {
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:'#b3e7dc'
          }}>
          <ImageBackground source={require('./images/final_recycle_page_2.jpg')} style={styles.image}>
                <Text>Here are some link where you can learn more about how to recycle!</Text>

                      <Text style={{color: 'blue'}}
                      onPress={() => Linking.openURL('https://www.epa.gov/recycle/recycling-basics')}>
                      EPA Recycling Basics</Text>

                <Text>Compost Information:</Text>
                <Text>~Banana peels can be put directly into the compost with no special treatment</Text>
    <Text>Cutting banana peels into smaller pieces can speed up the composting process</Text>
    <Text>For more information on where you can compost locally, visit:</Text>
    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL('https://www.litterless.com/wheretocompost')}>
                          Where to Compost Locally</Text>
                        </ImageBackground>
    </View>
  );
};

const Settings = ({ navigation, route }) => {
  const [vegan_toggleCheckBox, vegan_setToggleCheckBox] = React.useState(false);
    const [vegetarian_toggleCheckBox, vegetarian_setToggleCheckBox] = React.useState(false);
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: 400

    }
                   });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#b3e7dc'
          }}>
          <ImageBackground source={require('./images/generic_background_1.jpg')} style={styles.image}>
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
                    </ImageBackground>
    </View>
  );
};

const LocalOptions = ({ navigation, route }) => {
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 400

  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#b3e7dc'
          }}>
          <ImageBackground source={require('./images/generic_background_1.jpg')} style={styles.image}>
                         <Button
                            title="Recommended Recipes"
                            color='#6c0102'
                              onPress={() => navigation.navigate('Recipe List', { array: [{key: 'quiche'}, {key: 'beef taco'}] })   }
                            />

                      <Button
                         title="Eco-Friendly Recipes"
                         color='#6c0102'
                                onPress={() => navigation.navigate('Recipe List', { array: [{key: 'quiche'}, {key: 'beef taco'}] })   }

                         />

                                <Button
                                   title="All Recipes"
                                   color='#6c0102'
                               onPress={() => navigation.navigate('Recipe List', { array: [{key: 'Sweet Potato Tortilla Soup'}, {key: 'Baked Lemon-Butter Chicken Thighs'}, {key: 'Keto Cheeseburger Casserole'}, {key: 'Simple and Delicious Kale Soup'},{key: 'Old Fashioned Easy Apple Crisp'}, {key: 'Banana Pancakes'}, {key: 'Sheet Pan Ratatouille'}, {key: 'Breakfast Wrap'}] })   }

                                   />
                                   </ImageBackground>

    </View>
  );
};

const VirtualFridge = ({ navigation, route }) => {
const array = route.params.array;
console.log("arr: ",array);
var image_array = [{key: 'banana'}, {key: 'milk'},{key:'apple'}];

const [images, set_images] = React.useState([{key:require('./images/banana.jpg')},{key:require('./images/milk.jpg')},{key:require('./images/onion.jpg')},{key:require('./images/egg.jpg')},{key:require('./images/pineapple.jpg')},{key:require('./images/garlic.jpg')},{key:require('./images/butter.jpg')},{key:require('./images/lemon.jpg')}]);
var index = 0;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",


  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#b3e7dc'
          }}>
          <ImageBackground source={require('./images/final_grocery_page.jpg')} style={styles.image}>
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
                    backgroundColor: '#a6b401',
                    //borderColor:'#d35647',
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
                </ImageBackground>
    </View>
  );
};

const RecipeList = ({ navigation, route }) => {
const array = route.params.array;
console.log("arr: ",array);
var image_array = [{key: 'banana'}, {key: 'milk'},{key:'apple'}];

const [images, set_images] = React.useState([{key:require('./images/sweet_potato_tortilla_soup.png')},{key:require('./images/baked_lemon_butter_chicken_thighs.png')},{key:require('./images/keto_cheeseburger_casserole.png')},{key:require('./images/simple_and_delicious_kale_soup.png')},{key:require('./images/old_fashioned_easy_apple_crisp.png')},{key:require('./images/banana_pancakes.png')},{key:require('./images/sheet_pan_ratatouille.png')},{key:require('./images/breakfast_wrap_2.png')}]);
var index = 0;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  }
                 });
  return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#b3e7dc'
          }}>
          <ImageBackground source={require('./images/final_recipe_page.jpg')} style={styles.image}>
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
                    backgroundColor: '#a6b401',
                    //borderColor:'#d35647',
                    resizeMode:'contain',
                    margin:8
                  }}
                />
                    )}



                  />

                <Text>Recipe List:</Text>
                <FlatList
                data={array}
                renderItem={({item}) =>
                <Text>{item.key}</Text>}
                />
                </ImageBackground>
    </View>
  );
};

const App = () => {

  return (
  <>


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


      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;