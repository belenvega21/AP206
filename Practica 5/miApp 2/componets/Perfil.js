import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {

    const [mostrar, setMostrar]= useState(false);

  return (
    <View>

      <Text>{nombre}</Text>

      {mostrar &&
      
      
      
      <>
      <Text>{carrera}</Text>
      <Text>{materia}</Text>
      <Text>{cuatrimestre}</Text>
      </>
      }
      
      <Button title={"Mostrar Perfil"}
      onPress={() => setMostrar(!mostrar)} />

    </View>
  );
}

/*
import React from 'react';
import { View, Text } from 'react-native';

export const Perfil = props) => {

    return (
      <View>

        <Text> {props.nombre:} </Text>
        <Text>{props.carrera:} </Text>
        <Text> {props.materia:} </Text>
        <Text> {props.cuatrimestre:} </Text>

      </View>
*/