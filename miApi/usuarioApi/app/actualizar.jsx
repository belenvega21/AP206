import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";
import { API_URL, AUTH } from "../config/api";

export default function Actualizar() {
  const { id, nombre, edad } = useLocalSearchParams();

  const [nuevoNombre, setNuevoNombre] = useState(nombre ?? "");
  const [nuevaEdad, setNuevaEdad] = useState(String(edad ?? ""));
  const [cargando, setCargando] = useState(false);

  const actualizarUsuario = async () => {
    if (!nuevoNombre.trim() || !nuevaEdad.trim()) {
      if (Platform.OS === "web") {
        window.alert("Completa todos los campos.");
      } else {
        Alert.alert("Campos vacíos", "Completa todos los campos.");
      }
      return;
    }

    try {
      setCargando(true);

      const respuesta = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: AUTH,
        },
        body: JSON.stringify({
          nombre: nuevoNombre,
          edad: Number(nuevaEdad),
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el usuario");
      }

      if (Platform.OS === "web") {
        window.alert("Los cambios fueron actualizados correctamente.");
        router.replace("/(tabs)/consulta");
      } else {
        Alert.alert(
          "Actualización exitosa",
          "Los cambios fueron actualizados correctamente.",
          [
            {
              text: "Aceptar",
              onPress: () => router.replace("/(tabs)/consulta"),
            },
          ]
        );
      }
    } catch (error) {
      if (Platform.OS === "web") {
        window.alert(error.message);
      } else {
        Alert.alert("Error", error.message);
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Actualizar Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>

        <TextInput
          style={styles.input}
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
        />

        <Text style={styles.label}>Edad</Text>

        <TextInput
          style={styles.input}
          value={nuevaEdad}
          keyboardType="numeric"
          onChangeText={setNuevaEdad}
        />

        <Pressable
          style={[
            styles.boton,
            cargando && styles.botonDeshabilitado,
          ]}
          onPress={actualizarUsuario}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? "Guardando..." : "Guardar cambios"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
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

    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
      web: {
        boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
      },
    }),
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#374151",
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    backgroundColor: "#FFF",
    fontSize: 16,
  },

  boton: {
    backgroundColor: "#FACC15",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  botonDeshabilitado: {
    backgroundColor: "#9CA3AF",
  },

  textoBoton: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1F2937",
  },
});