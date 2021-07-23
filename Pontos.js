import React, { Fragment } from 'react';
import { 
    Container, Header, Title, Content, Body,
    Button, Right, Fab, Icon, List, ListItem, Label 
} from 'native-base';
import { Image, StyleSheet, ImageBackground, View } from 'react-native';
import {Text} from "react-native-svg";
import {PieChart} from 'react-native-svg-charts'

import backgroundImage from '../assets/background-azul.jpg'

const Pontos = (props) => {

    const data = [{key: 0, value: 58, svg: {fill: "#45c421"}}, {key: 1,value: 95, svg: {fill: "#4284ed"}}];
    const pieData = data.filter((value) => value > 0).map((value, index) => ({
        value,
        key: `${index}-${value}`,
    }));

    const Label = ({slices}) => {
        return slices.map((slice, index) => {
            const  {pieCentroid, data} = slice;
            return(
                <Text
                key={`label-${index}`}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="#FFF"
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={22}
                >
                    {data.value}
                </Text>
            )
        })
    }

    return (
        <Fragment>
            <ImageBackground 
                source={backgroundImage}
                style={styles.background}
            >
                <View style={styles.titleBar}>
                    <PieChart style={{height: 300}} data={data}>
                        <Label/>
                    </PieChart>
                    <Text style={{color: 'black', alignContent: 'flex-end'}}> *Cor verde representa pontos obtidos</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>    
                
                </View>
                    
            </ImageBackground>
        </Fragment>
        
    );

}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        position: 'relative'
    },
    fragmento: {
        flex: 8
    },
    titleBar: {
        flex: 2,
        
        justifyContent: 'center',
        backgroundColor: "#FFF",
        padding: 20
    },
    texto: {
        fontFamily: 'Lato',
        color: "black",
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 10
    }
});

export default Pontos;