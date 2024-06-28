import React from 'react';
import { Colors } from '../components/styles';

const {primary, tertiary} = Colors;
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Vistas
import Login from '../Views/Login';
import SignUp from '../Views/SignUp';
import Welcome from '../Views/Welcome'

const Stack = createNativeStackNavigator();

const RootStack = () =>{
    return(
        
        <NavigationContainer>
            <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'transparent'
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle:{
                paddingLeft: 20
            }
        }}
        initialRouteName='Login'
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;