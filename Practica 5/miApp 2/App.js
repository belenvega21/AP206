/* ZONA 1: IMPORTACIONES DE COMPONENTES Y ARCHIVOS */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './componets/Saludo';
import { Saludo2 } from './componets/Saludo2';
import { Perfil } from './componets/Perfil';


/* ZONA 2: MAIN - HOGAR DE LOS COMPONENTES */
export default function App() {
  return (
    <View style={styles.container}>

     
      <Perfil
        nombre="Belén Vega"
        carrera="Sistemas"
        materia="Progra Movil"
        cuatrimestre="9"
      />

      <Perfil
        nombre="Gabriel"
        carrera="Admin"
        materia="Conta"
        cuatrimestre="2do"
      />

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