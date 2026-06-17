import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, style }) => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[estilos.tarjeta, style]}>

      <Text style={estilos.nombre}>{nombre}</Text>

      {mostrar && (
        <>
          <Text style={estilos.carrera}>{carrera}</Text>

          <Text style={estilos.otrotexto}>{materia}</Text>

          <Text style={estilos.otrotexto}>{cuatrimestre}</Text>
        </>
      )}

      <Button
        title={mostrar ? "Ocultar Perfil" : "Mostrar Perfil"}
        onPress={() => setMostrar(!mostrar)}
      />

    </View>
  );
};

const estilos = StyleSheet.create({
  tarjeta: {
    width: 250,
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
  },

  nombre: {
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  carrera: {
    fontSize: 20,
    color: 'red',
  },

  otrotexto: {
    fontSize: 15,
    color: 'blue',
  },
});