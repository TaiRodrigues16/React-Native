import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Button, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Login from "./src/Login";
import Feed from "./src/Feed";
import Upload from "./src/Upload"; 
import Pontos from "./src/Pontos";
import Tabela from "./src/Tabela";
import FilePreview from "./src/FilePreview";

import backgroundImage from './assets/imagemLogin.png'

function Home ({navigation}) { 
    return (
        <ImageBackground 
            source={backgroundImage} 
            style={styles.background}
        >
            <View style={styles.Display}>
                <View  style={styles.V1}/>
                <View  style={styles.V2}>
                    <Button
                        title = "Login"
                        buttonStyle={styles.botao}
                        onPress = {() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </ImageBackground>
    )
    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Display: {
        flexGrow: 1,
        width: 100
    },
    botao: {
        padding: 20,
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 300,
        width: 200
    },
    V1: {
        flexGrow: 3
    },
    V2: {
        flexGrow: 1
    }
})

function MyTabs (){
  return(
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#3366ff',
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Notificação',
            tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pontos"
          component={Pontos}
          options={{
            tabBarLabel: 'Pontos',
            tabBarIcon: ({ color, size }) => (
              <Icon name="update" color={color} size={size} />
            ),
           // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Tabela"
          component={Tabela}
          options={{
            tabBarLabel: 'Tabela',
            tabBarIcon: ({ color, size }) => (
              <Icon name="toc" color={color} size={size} />
            ),
           // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Enviar"
          component={Upload}
          options={{
            tabBarLabel: 'Enviar',
            tabBarIcon: ({ color, size }) => (
              <Icon name="publish" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  )
}


export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={MyTabs} />
        <Stack.Screen name="FilePreview" component={FilePreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


