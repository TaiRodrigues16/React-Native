import React, { Fragment, Component } from 'react';
import { 
    Container, Header, Title, Content, Body,
    Button, Right, Fab, Icon, List, ListItem, Text 
} from 'native-base';
import { Modal, StyleSheet, Pressable, ImageBackground, View, Platform, TextInput } from 'react-native';
import DocumentPicker from "react-native-document-picker";
import RNFetchBlob from 'rn-fetch-blob';
import firebaseSetup from './setup';

import backgroundImage from '../assets/background-azul.jpg'
import { message } from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/auth';

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
    return messaging.getToken();
})
.catch(function(err) {
    console.log("Erro");
})



const Upload = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const {storage, database}  = firebaseSetup();
    const [filesList, setFilesList] = React.useState([]);
    // We can choose all types of files here
    async function chooseFile(){
        // Pick a single file
        try {
            const file = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            const path = await normalizePath(file.uri);
            const result = await RNFetchBlob.fs.readFile(path,'base64');
            uploadFileToFirebaseStorage(result, file);
           // console.log(result);
           messaging.setBackgroundMessageHandler(function(playload){
                const title = "Enviado com Sucesso!"
                const option = {
                    body: playload.data.status
                }
                return self.ServiceWorkerRegistration.showNotification(title,option);
            })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }
    // We have to remove filePrefix from peth url
    async function normalizePath(path){
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            const filePrefix = 'file://';
            if(path.startsWith(filePrefix)){
                path = path.substring(filePrefix.length);
                try {
                    path = decodeURI(path);
                } catch (error) {} 
            }
        }
        return path;
    }

    async function uploadFileToFirebaseStorage(result, file){
        const uploadTask = storage()
        .ref(`allFiles/${file.name}`)
        .putString(result, 'base64',{contentType:file.type});

        uploadTask.on('state_changed', function(snapshot){
            
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
              case storage.TaskState.PAUSED: // or 'paused'
                break;
              case storage.TaskState.RUNNING: // or 'running'
                break;
            }
        }, function(error) {
            console.log(error);
        }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                saveFileToRealtimeDatabase(downloadURL, file);
            });
        });
    }

    const [pontos, setPontos] = React.useState(0);
    
    function saveFileToRealtimeDatabase(downloadURL, file, pontos){
        const uniqueKey = database().ref().push().key;
        database().ref(`allFiles/${uniqueKey}`).update({
            fileName: file.name,
            fileType: file.type,
            fileURL: downloadURL,
            pontos: pontos,
        });
    }

    React.useEffect(() => {
        //Start
        setFilesList([])
        //End
        const onChildAdded = database().ref(`allFiles`).on('child_added', (snapshot) => {
            let helperArr=[];
            helperArr.push(snapshot.val());
            setFilesList((files) => [...files,...helperArr]);
        });
        return () => database().ref(`allFiles`).off('child_added', onChildAdded);
    },[]);

    
    
    return (
        <Fragment>
            <ImageBackground 
                source={backgroundImage}
                style={styles.background}
            >
                <View style={styles.titleBar}>
                    <Text style={styles.texto}>Certificados</Text>
                </View>
            </ImageBackground>
            <Content style={styles.fragmento}>
                {
                    filesList.map((item, index) => (
                    <ListItem 
                    key={index}
                    onPress={() => 
                        props.navigation.navigate('FilePreview', {
                            fileData: item,
                        })
                    }>
                        <Text>{item.fileName}</Text>
                    </ListItem>
                ))}
            </Content>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={{color: "#FFF", alignItems: "stretch"}}>Pontuação:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    placeholder="Digite o valor de sua AC"
                    value={pontos}
                    onChange={pontos => setPontos(pontos)}
                />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={chooseFile}
                    >
                        <Text style={styles.textStyle}>Adicionar arquivo</Text>
                    </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                <Text style={styles.textStyle}>Fechar</Text>
                </Pressable>   
                </View>
                </View>
            </Modal>

            <Fab
                direction="up"
                position="bottomRight"
                style={{ backgroundColor: "#3366ff"}}
                //onPress={chooseFile}
                onPress={() => setModalVisible(true)}
            >
                <Icon type="MaterialIcons" name="cloud-upload" />
            </Fab>

        </Fragment>
    );

}

const styles = StyleSheet.create({
    background:{
        flex: 1
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
    },
    input: {
        height: 45,
        width: 200,
        borderBottomWidth: 1, 
        borderColor: '#ffffff', 
        color: 'black',
        alignSelf: "center",
        borderColor: "#EEE",
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10, 
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      },
      modalView: {
        width: 300,
        height: 200,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 5,
        justifyContent: 'flex-end',
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        alignItems: 'flex-end',
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default Upload;