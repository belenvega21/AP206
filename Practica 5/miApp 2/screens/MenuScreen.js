// MenuScreen.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import TarjetasScreens from './TarjetasScreens';
import SafeAreaScreens from './SafeAreaScreens';
import PressableSwitch from './Pressable&Switch';
import TextInputAlert from './TextInput&Alert';
import FlatListSectionList from './FlatList&SectionList';
import ImageBackgroundScreen from './ImageBackgroung';
import ActivityIndicatorScreen from './ActivityIndicator';
import ModalBottomSheet from './ModalBottomSheet';

export default function MenuScreen() {

  const [screen, setScreen] = useState('menu');

  switch (screen) {

    case 'tarjetas':
      return <TarjetasScreens />;

    case 'safeArea':
      return <SafeAreaScreens />;

    case 'pressable':
      return <PressableSwitch />;

    case 'textInput':
      return <TextInputAlert />;

    case 'flatList':
      return <FlatListSectionList />;

    case 'imageBackground':
      return <ImageBackgroundScreen />;

    case 'activityIndicator':
      return <ActivityIndicatorScreen />;

    case 'modal':
      return <ModalBottomSheet />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <Text style={styles.titulo}>Menu de{"\n"}Practicas</Text>
          <Text style={styles.subtitulo}>
            React Native Components
          </Text>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('tarjetas')}
          >
            <Text style={styles.textoBoton}>Tarjetas</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('safeArea')}
          >
            <Text style={styles.textoBoton}>SafeAreaView</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('pressable')}
          >
            <Text style={styles.textoBoton}>Pressable & Switch</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('textInput')}
          >
            <Text style={styles.textoBoton}>TextInput & Alert</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('flatList')}
          >
            <Text style={styles.textoBoton}>FlatList & SectionList</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('imageBackground')}
          >
            <Text style={styles.textoBoton}>ImageBackground</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('activityIndicator')}
          >
            <Text style={styles.textoBoton}>ActivityIndicator</Text>
          </Pressable>

          <Pressable
            style={styles.boton}
            onPress={() => setScreen('modal')}
          >
            <Text style={styles.textoBoton}>Modal & BottomSheet</Text>
          </Pressable>

          <StatusBar style="auto" />

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8D6E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  subtitulo: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 30,
  },

  boton: {
    backgroundColor: '#5B4CFF',
    width: 270,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },

  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});