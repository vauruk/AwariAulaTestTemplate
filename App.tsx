import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import { Button, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const TitleHeader = () => {
  return (
    <>
      <Text>Comp Title</Text>
    </>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ title: 'Principal' }}
            component={Home}
          />
          <Stack.Screen
            name="Page1"
            options={{
              headerTitle: props => <TitleHeader {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#000000"
                />
              ),
            }}
            component={Page1}
          />
          <Stack.Screen
            name="Page2"
            options={{ headerShown: false }}
            component={Page2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
