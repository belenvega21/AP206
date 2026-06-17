/* ZONA 1: IMPORTACIONES DE COMPONENTES Y ARCHIVOS */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from './componets/Perfil';


/* ZONA 2: MAIN - HOGAR DE LOS COMPONENTES */
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil
        style={styles.tarjetaRosa}
        nombre="Belén Vega"
        carrera="Sistemas"
        materia="Progra Movil"
        cuatrimestre="9"
      />

      <Perfil
        style={styles.tarjetaAzul}
        nombre="Gabriel"
        carrera="Admin"
        materia="Conta"
        cuatrimestre="2do"
      />
      
      <Perfil
        style={styles.tarjetaRosa}
        nombre="Belén Vega2"
        carrera="Sistemas"
        materia="Progra Movil"
        cuatrimestre="9"
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  tarjetaRosa: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 25,
    borderRadius: 15,
  },

  tarjetaAzul: {
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 25,
    borderRadius: 15,
  },
});