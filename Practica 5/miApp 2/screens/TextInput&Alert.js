import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  Alert,
  Keyboard,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

export default function TextInputScreen() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");

  const alertManager = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const procesarRegistro = () => {
    if (Platform.OS !== "web") Keyboard.dismiss();

    if (!nombre || !password || !edad || !correo) {
      alertManager("Validación", "Todos los campos son obligatorios");
      return;
    }

    alertManager("Éxito", `Registro procesado para: ${nombre}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        maxLength={3}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button
        title="Registrar Usuario"
        onPress={procesarRegistro}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f6fa",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#dcdde1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});