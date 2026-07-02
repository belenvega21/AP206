import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ScrollView, } 
from 'react-native';



export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Campos incompletos',
        'Debes llenar todos los campos.'
      );
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert(
        'Error',
        'El semestre debe ser un número.'
      );
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Registro de Evento Universitario
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.texto}>¿Asistirá al taller?</Text>
        <Switch
          value={taller}
          onValueChange={setTaller}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.texto}>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.texto}>¿Participará en actividades deportivas?</Text>
        <Switch
          value={deportes}
          onValueChange={setDeportes}
        />
      </View>

      <Button
        title="Enviar Registro"
        onPress={enviarRegistro}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF5FA',
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D63384',
    textAlign: 'center',
    marginBottom: 30,
  },

  subtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D63384',
    marginTop: 15,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#F8BBD9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 18,
    fontSize: 18,
    color: '#444',
  },

  switchContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  texto: {
    fontSize: 17,
    color: '#444',
  },
});

