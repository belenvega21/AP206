/* ZONA 1: IMPORTACIONES DE COMPONENTES Y ARCHIVOS */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './componets/Saludo';
import { Saludo2 } from './componets/Saludo2';


/* ZONA 2: MAIN - HOGAR DE LOS COMPONENTES */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>---------------- Componentes Nativos ----------------</Text>

      <Image source={require('./assets/wave.png')} />

      <Text>Hola Mundo RN</Text>

      <Text>---------------- Componente Simple ----------------</Text>

      <Saludo />

      <Text>---------------- Componente Compuesto ----------------</Text>

      <Saludo2 />

      <StatusBar style="auto" />

    </View>
  );
}


/* ZONA 3: ESTILOS Y POSICIONAMIENTOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});