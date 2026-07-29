import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// URL adaptativa según el dispositivo/entorno
const API_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:8000/v1/usuarios/'
    : 'http://localhost:8000/v1/usuarios/';

export default function AltaUsuariosScreen() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarUsuario = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Campos vacíos', 'Completa todo el formulario.');
      return;
    }

    try {
      setCargando(true);

      const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          edad: Number(edad),
        }),
      });

      // Validar si la petición HTTP falló
      if (!respuesta.ok) {
        const detalleError = await respuesta.text();
        console.error('Error del servidor:', respuesta.status, detalleError);
        throw new Error(`Error en el servidor (${respuesta.status})`);
      }

      const datos = await respuesta.json();
      console.log('Respuesta de la API:', datos);

      mostrarMensaje('ÉXITO', 'USUARIO REGISTRADO');
      setNombre('');
      setEdad('');
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      mostrarMensaje('ERROR', 'NO SE PUDO REGISTRAR EL USUARIO');
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Registro de Usuarios</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable
          style={[styles.boton, cargando && styles.botonDeshabilitado]}
          onPress={guardarUsuario}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? 'Guardando...' : 'Agregar Usuario'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    ...Platform.select({
      android: { elevation: 5 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
      },
      web: { boxShadow: '0px 3px 8px rgba(0,0,0,0.15)' },
    }),
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botonDeshabilitado: {
    backgroundColor: '#A0AEC0',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});