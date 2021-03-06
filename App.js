import React from 'react';
import { H1 } from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import List from './screens/List';
import Profile from './screens/Profile';
import LoginHome from './screens/LoginHome';
import Farmer from './screens/Farmer';

import Home from './screens/Home'
import FarmerHome from './screens/FarmerHome'
import Market from './screens/Market'
import Analysis from './screens/Analysis'
import Activities from './screens/Activities'

const Stack = createStackNavigator();

class App extends React.Component{
  render()
  {
    return(
     <NavigationContainer>
     <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false  }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LoginHome" component={LoginHome} />
        <Stack.Screen name="Farmer" component={Farmer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="FarmerHome" component={FarmerHome} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Analysis" component={Analysis} />
        <Stack.Screen name="Activities" component={Activities} />

      </Stack.Navigator>
     </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  headingStyle: {
    fontSize: 32
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  }
});

export default App;
