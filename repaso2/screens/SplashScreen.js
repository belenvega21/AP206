import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/libro.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Registro de Libros
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },

  logo:{
    width:170,
    height:170,
    marginBottom:20
  },

  titulo:{
    fontSize:28,
    fontWeight:'bold',
    color:'#2E8B57'
  }

});