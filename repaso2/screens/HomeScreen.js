import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {
    if (titulo === '' || autor === '' || genero === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros((prevLibros) => [...prevLibros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      Alert.alert('Éxito', 'Libro agregado correctamente');
    }, 4000);
  };

  return (
    <ImageBackground
      source={require('../assets/fondo.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>
          Registro de Libros Leídos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={styles.boton}
          onPress={agregarLibro}
        >
          <Text style={styles.textoBoton}>
            Agregar Libro
          </Text>
        </Pressable>

        {cargando && (
          <ActivityIndicator
            size="large"
            color="#ffffff"
            style={{ marginTop: 20 }}
          />
        )}

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nombre}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  nombre: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});