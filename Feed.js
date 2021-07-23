import React, {Component, Fragment} from 'react';
import { 
    Container, Header, Title, Content, Body,
    Button, Right, Fab, Icon, List, ListItem
} from 'native-base';
import { Text, View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';


import backgroundImage from '../assets/background-azul.jpg'

class Feed extends Component{
    render(){
        return (
            <Fragment>
            <ImageBackground 
                source={backgroundImage}
                style={styles.background}
            >
                <View style={styles.titleBar}>
                    <Text style={styles.texto}><Icon type="MaterialIcons" name="notifications-none" style={{color: "#FFF"}}/>Notificações </Text>
                </View>
            </ImageBackground>
            <List style={styles.fragmento}>
                <ListItem>
                    <Body>
                        <Text style={{color: "#35c932"}}>Certificado Válido</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text style={{color: "#35c932"}}>Certificado Válido</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text style={{color: "#d60000"}}>Certificado Inválido</Text>
                    </Body>
                </ListItem>
            </List>
        
                
            
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 2
    },
    fragmento: {
        flex: 8
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    texto: {
        fontFamily: 'Lato',
        color: "#FFF",
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 10
    }
});

export default Feed;