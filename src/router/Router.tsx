import React from 'react'
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import ROUTES from "./routes";

import { default as HomeScreen } from '../../pages'


enableScreens();
const Tab = createBottomTabNavigator();

const Router: React.FunctionComponent = () => {

    const authorizedTab = (
      <>
        <Tab.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen}/>
      </>
    )

    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
          }}
          initialRouteName={ROUTES.HOME_SCREEN}
          tabBar={() => <></>}
        >
          {authorizedTab}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Router;