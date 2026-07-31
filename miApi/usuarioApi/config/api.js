import { Platform } from "react-native";
import { encode } from "base-64";

const HOST =
  Platform.OS === "android"
    ? "10.0.2.2"
    : "192.168.100.14";

export const API_URL = `http://${HOST}:8000/v1/usuarios/`;

export const AUTH = "Basic " + encode("admin:1234");