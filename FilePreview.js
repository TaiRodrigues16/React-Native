import { Content } from 'native-base';
import * as React from 'react';
import { Dimensions, Image } from "react-native";
import Pdf from 'react-native-pdf';


const FilePreview = ({route}) => {
    console.log(route.params.fileData);
    return(
        <Content>
            {
                route.params.fileData.fileType.includes('image/') && (
                <Image 
                    source={{uri:route.params.fileData.fileURL}} 
                    style={{
                        flex:1,
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    resizeMode={'contain'}
                />
            )}

            {
                route.params.fileData.fileType === 'application/pdf' && (
                <Pdf 
                    source={{uri:route.params.fileData.fileURL}}
                    style={{
                        flex:1,
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    resizeMode={'contain'}
                />
            )}
        </Content>
    )
};

export default FilePreview;