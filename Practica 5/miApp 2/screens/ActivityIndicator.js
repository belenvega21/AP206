import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, ActivityIndicator, Platform, Image } from 'react-native';

export default function ActivityIndicatorScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGuardar = () => {
    if (nombre.trim() === '' || carrera.trim() === '') {
      alert('Por favor, llena todos los campos.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(`Perfil de ${nombre} guardado con éxito`);
      
      setNombre('');
      setCarrera('');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.formContainer}
      >
        <View style={styles.formContainerInner}>
          <View style={styles.formBody}>
            <Text style={styles.titulo}>Agregar Perfil</Text>
            
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
          </View>

          <View style={styles.actionArea}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#4D96FF" style={styles.loader} />
            ) : (
              <Button title="Guardar Perfil" onPress={handleGuardar} color="#4D96FF" />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFEFF6',
      justifyContent: 'center',
    },
  
    formContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  
    formContainerInner: {
      marginHorizontal: 25,
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      padding: 25,
      shadowColor: '#F8A5C2',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 8,
    },
  
    formBody: {
      alignItems: 'center',
    },
  
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FF5C8A',
      marginBottom: 25,
    },
  
    input: {
      width: '100%',
      height: 55,
      backgroundColor: '#FFF7FA',
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#FFD6E7',
      paddingHorizontal: 18,
      fontSize: 16,
      marginBottom: 18,
      color: '#444',
    },
  
    actionArea: {
      marginTop: 10,
    },
  
    loader: {
      marginVertical: 15,
    },
  });