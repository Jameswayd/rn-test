import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { FirebaseMLVision } from '@react-native-firebase/ml-vision';

class TextRecognitionScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {
        recognizedText: '',
    };
    }

    takePicture = async () => {
    if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        this.processImage(data.uri);
    }
};

    processImage = async (uri) => {
    const processed = await FirebaseMLVision().cloudTextRecognizerProcessImage(uri);
    this.setState({ recognizedText: processed.text });
    };

render() {
    return (
        <View style={{ flex: 1 }}>
        <RNCamera
            ref={(ref) => {
            this.camera = ref;
            }}
            style={{ flex: 1 }}
        >
            <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
         >
            <TouchableOpacity
                style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
                }}
                onPress={this.takePicture}
            >
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                拍照並識別藥品
            </Text>
            </TouchableOpacity>
        </View>
        </RNCamera>
        <View style={{ flex: 1 }}>
            <Text>{this.state.recognizedText}</Text>
        </View>
    </View>
    );
}
}

export default TextRecognitionScreen;
