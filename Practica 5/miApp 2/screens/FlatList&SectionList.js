//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, SectionList } from 'react-native';
import { useState } from 'react';

export default function ListasScreen() {

  const [elementos, setElementos] = useState([
    { id: '1', nombre: 'Elemento A' },
    { id: '2', nombre: 'Elemento B' },
    { id: '3', nombre: 'Elemento C' },
    { id: '4', nombre: 'Elemento D' },
    { id: '5', nombre: 'Elemento A' },
    { id: '6', nombre: 'Elemento B' },
    { id: '7', nombre: 'Elemento C' },
    { id: '8', nombre: 'Elemento D' },
    { id: '9', nombre: 'Elemento A' },
    { id: '10', nombre: 'Elemento B' },
    { id: '11', nombre: 'Elemento C' },
    { id: '12', nombre: 'Elemento D' },
  ]);

  const [secciones, setSecciones] = useState([
    {
      tituloCategoria: 'Refrescos',
      data: ['Coca-cola', 'Fanta', 'Pepsi'],
    },
    {
      tituloCategoria: 'Jugos',
      data: ['Zanahoria', 'Naranja', 'Remolacha']
    },
    {
      tituloCategoria: 'Refrescos',
      data: ['Coca-cola', 'Fanta', 'Pepsi'],
    },
    {
      tituloCategoria: 'Jugos',
      data: ['Zanahoria', 'Naranja', 'Remolacha']
    },
    {
      tituloCategoria: 'Refrescos',
      data: ['Coca-cola', 'Fanta', 'Pepsi'],
    },
    {
      tituloCategoria: 'Jugos',
      data: ['Zanahoria', 'Naranja', 'Remolacha']
    },
  ]);

  const eliminarElemento = (id) => {
    setElementos(elementos.filter(item => item.id != id));
  };

  const renderContenidoSuperior = () => (
    <View>
      <Text style={styles.titulo}> Práctica FlatList </Text>
      
      <FlatList
        data={elementos}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.itemFlat}>
            <Text style={styles.texto}>{item.nombre}</Text>
            <Button title="Eliminar" onPress={() => eliminarElemento(item.id)} />
          </View>
        )}
      />

      <View style={styles.barraDivisora} />

      <Text style={styles.titulo}> Práctica SectionList </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <SectionList

        sections={secciones}


        keyExtractor={(item, index) => item + index + Math.random().toString()}

        ListHeaderComponent={renderContenidoSuperior}

        renderItem={({ item }) => (

          <View style={styles.itemSection}>
            <Text style={styles.texto}>{item}</Text>
          </View>
          
        )}

        renderSectionHeader={({ section: { tituloCategoria } }) => (

          <View style={styles.encabezado}>
            <Text style={styles.textoEncabezado}>{tituloCategoria}</Text>
          </View>

        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F7FA',
      paddingTop: 55,
      paddingHorizontal: 18,
    },
  
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#2C3E50',
      marginBottom: 20,
      marginTop: 10,
    },
  
    itemFlat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 18,
      paddingHorizontal: 18,
      marginBottom: 12,
      borderRadius: 15,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 5,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
  
    itemSection: {
      backgroundColor: '#FFFFFF',
      padding: 18,
      marginHorizontal: 5,
      marginBottom: 8,
      borderRadius: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
  
    encabezado: {
      backgroundColor: '#6C63FF',
      padding: 12,
      borderRadius: 12,
      marginTop: 22,
      marginBottom: 10,
    },
  
    textoEncabezado: {
      color: '#FFFFFF',
      fontSize: 19,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    texto: {
      fontSize: 18,
      color: '#34495E',
      fontWeight: '500',
    },
  
    barraDivisora: {
      height: 3,
      backgroundColor: '#6C63FF',
      borderRadius: 20,
      marginVertical: 35,
    },
  });