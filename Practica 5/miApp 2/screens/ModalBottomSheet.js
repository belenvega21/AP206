import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, Pressable } from 'react-native';

export default function ModalBottomSheet() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Modal Bottom Sheet</Text>

      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.fondo}>
          <View style={styles.bottomSheet}>
            <Text style={styles.texto}>Contenido del Modal</Text>

            <Pressable
              style={styles.boton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBoton}>Cerrar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF8FC',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
  
    titulo: {
      fontSize: 30,
      fontWeight: '700',
      color: '#D63384',
      marginBottom: 25,
      letterSpacing: 1,
    },
  
    fondo: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(214, 51, 132, 0.18)',
    },
  
    bottomSheet: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 35,
      paddingHorizontal: 30,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      alignItems: 'center',
  
      shadowColor: '#D63384',
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 12,
    },
  
    texto: {
      fontSize: 20,
      color: '#6D597A',
      marginBottom: 25,
      fontWeight: '600',
    },
  
    boton: {
      backgroundColor: '#F8A5C2',
      paddingVertical: 14,
      paddingHorizontal: 40,
      borderRadius: 30,
      elevation: 4,
    },
  
    textoBoton: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
  });