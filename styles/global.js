import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contenido: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: "2.5%",
    flex: 1,
  },
  formulario: {
    flex: 1,
    marginHorizontal: "2.5%",
    flexDirection: "column",
    marginTop: 20,
  },
  titulo: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  input: {
    backgroundColor: "#FFF",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#28303B",
    marginTop: 20,
  },
  botonTexto: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#FFF",
  },
  enlace: {
    color: "#FFF",
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default globalStyles;