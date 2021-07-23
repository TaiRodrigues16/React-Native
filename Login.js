import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';

import backgroundImage from '../assets/background.png'


export default class Login extends Component {
    
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  }

  login = async() => {
    const { email, password} = this.state;

    try{
      const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password);

      this.setState({isAuthenticated: true});
      console.log(user);

      this.props.navigation.navigate('Menu')

    } catch (err) {
      console.log(err);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ImageBackground 
          source={backgroundImage} 
          style={{flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
        >
          <Text style={{color: "#FFF", alignItems: "stretch"}}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <Text style={{color: "#FFF"}}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>

          { this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  input: {
    height: 45,
    width: 300,
    borderBottomWidth: 1, 
    borderColor: '#ffffff', 
    color: '#ffffff',
    alignSelf: "center",
    borderColor: "#EEE",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10, 
  },
  button: {
    height: 45,
    width: 300,
    backgroundColor: '#069',
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
