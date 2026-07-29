import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:8000/v1/usuarios/'
    : 'http://localhost:8000/v1/usuarios/';

export default function ConsultaUsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerUsuarios = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(API_URL);

      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      console.log('Respuesta de la API:', datos);

      setUsuarios(Array.isArray(datos) ? datos : datos.usuarios || []);
    } catch (error) {
      console.error('Error al consultar la API:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <View style={styles.linea} />
      <Text style={styles.info}>Edad: {item.edad} años</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Usuarios</Text>

      {cargando ? (
        <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
          renderItem={renderTarjeta}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <Text style={styles.vacio}>No se encontraron usuarios</Text>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 20,
  },
  titulo: {
    fontSize: Platform.OS === 'android' ? 24 : 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
      },
      web: { boxShadow: '0px 3px 5px rgba(0,0,0,0.15)' },
    }),
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    color: '#4B5563',
  },
  vacio: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 20,
    fontSize: 16,
  },
});