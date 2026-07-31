import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";
import { API_URL, AUTH } from "../config/api";

export default function Detalle() {
  const { id, nombre, edad } = useLocalSearchParams();

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n\n${mensaje}`);
      router.replace("/(tabs)/consulta");
    } else {
      Alert.alert(titulo, mensaje, [
        {
          text: "Aceptar",
          onPress: () => router.replace("/(tabs)/consulta"),
        },
      ]);
    }
  };

  const confirmarEliminar = () => {
    if (Platform.OS === "web") {
      const confirmar = window.confirm(
        `¿Estás seguro de que deseas eliminar al usuario ${nombre}?`
      );

      if (confirmar) {
        eliminarUsuario();
      }
    } else {
      Alert.alert(
        "Confirmar eliminación",
        `¿Estás seguro de que deseas eliminar al usuario ${nombre}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Sí, eliminar",
            style: "destructive",
            onPress: eliminarUsuario,
          },
        ]
      );
    }
  };

  const eliminarUsuario = async () => {
    try {
      const respuesta = await fetch(`${API_URL}${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTH,
        },
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el usuario");
      }

      mostrarMensaje(
        "Éxito",
        "El usuario fue eliminado correctamente."
      );
    } catch (error) {
      console.log(error);
      mostrarMensaje("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>

        <Text style={styles.valor}>{nombre}</Text>

        <View style={styles.linea} />

        <Text style={styles.label}>Edad</Text>

        <Text style={styles.valor}>{edad} años</Text>

        <View style={styles.linea} />

        <Pressable
  style={styles.actualizar}
  onPress={() =>
    router.push({
      pathname: "/actualizar",
      params: {
        id,
        nombre,
        edad,
      },
    })
  }
>
  <Text style={styles.textoBoton}>Actualizar</Text>
</Pressable>

        <Pressable
          style={styles.eliminar}
          onPress={confirmarEliminar}
        >
          <Text style={styles.textoBoton}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F9",
    padding: 20,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1F2937",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  label: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 8,
  },

  valor: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
  },

  linea: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },

  actualizar: {
    backgroundColor: "#FACC15",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  eliminar: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  textoBoton: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});