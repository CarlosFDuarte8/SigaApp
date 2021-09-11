import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import {camera} from '../../globalStyles/styles';

export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={camera.container}>
      <Camera style={camera.camera} type={type}>
        <View style={camera.buttonContainer}>
          <TouchableOpacity
            style={camera.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name="camera-reverse-outline" size={40} style={camera.icon}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}