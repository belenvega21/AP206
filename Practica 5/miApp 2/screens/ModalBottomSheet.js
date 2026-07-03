import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ModalBottomSheet() {
  const [modalVisible, setModalVisible] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const guardarDatos = () => {
    if (!nombre || !correo || !telefono) {
      Alert.alert(
        'Campos vacíos',
        'Por favor completa todos los campos.'
      );
      return;
    }

    Alert.alert(
      'Registro exitoso',
      `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`
    );

    setNombre('');
    setCorreo('');
    setTelefono('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Modal Bottom Sheet
      </Text>

      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={25}
        >
          <Pressable
            style={styles.fondo}
            onPress={() => setModalVisible(false)}
          >
            <Pressable
              style={styles.bottomSheet}
              onPress={() => {}}
            >
              <View style={styles.linea} />

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                <View style={styles.encabezado}>
                  <Ionicons
                    name="person-circle"
                    size={45}
                    color="#D63384"
                  />

                  <Text style={styles.texto}>
                    Registro de Usuario
                  </Text>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Nombre completo"
                  placeholderTextColor="#999"
                  value={nombre}
                  onChangeText={setNombre}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Correo electrónico"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  value={correo}
                  onChangeText={setCorreo}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Número telefónico"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  value={telefono}
                  onChangeText={setTelefono}
                />

                <Pressable
                  style={styles.botonGuardar}
                  onPress={guardarDatos}
                >
                  <Text style={styles.textoBoton}>
                    Guardar
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.botonCerrar}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textoBoton}>
                    Cerrar
                  </Text>
                </Pressable>
              </ScrollView>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF5FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#D63384',
    marginBottom: 30,
  },

  fondo: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 20,
  },

  linea: {
    width: 70,
    height: 6,
    backgroundColor: '#F7A8C7',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },

  encabezado: {
    alignItems: 'center',
    marginBottom: 25,
  },

  texto: {
    marginTop: 8,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#D63384',
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFF8FC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F7C6DA',
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 16,
  },

  botonGuardar: {
    backgroundColor: '#F48FB1',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    elevation: 6,
  },

  botonCerrar: {
    backgroundColor: '#CE93D8',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    elevation: 6,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

});