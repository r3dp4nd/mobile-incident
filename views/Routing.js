import { useNavigation } from "@react-navigation/native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H1,
  Text,
  Fab,
} from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import globalStyles from "../styles/global";

const Routing = () => {
  const navigation = useNavigation();

  const startRouting = () => {
    console.log("Iniciando Ruta");
  };

  const endRouting = () => {
    console.log("Terminando Ruta");
  };

  const writeIncident = () => {
    navigation.navigate("Incident");
    console.log("Enviando a incidente");
  };

  return (
    <Content style={{ backgroundColor: "#efefef", marginHorizontal: "2.5%" }}>
      <Card>
        <H1 style={globalStyles.titulo}>Bienvenido: {`Olek`}</H1>
        <CardItem>
          <Body>
            <Text style={styles.textoMargin}>Ruta: {}</Text>
            <Text style={styles.textoMargin}>Direccion</Text>
            <Text style={styles.textoMargin}>Vehiculo:</Text>
            <Text style={styles.textoMargin}>Material:</Text>
            <Text style={styles.textoMargin}>Inicio:</Text>
            <Text style={styles.textoMargin}>Termino:</Text>
          </Body>
        </CardItem>
        <View style={styles.content}>
          <Button
            rounded
            success
            style={styles.buttons}
            onPress={() => startRouting()}
          >
            <Text>Iniciar</Text>
          </Button>
          <Button rounded style={styles.buttons} onPress={() => endRouting()}>
            <Text>Terminar</Text>
          </Button>
          <Button
            rounded
            danger
            style={styles.buttons}
            onPress={() => writeIncident()}
          >
            <Text>Incidente</Text>
          </Button>
        </View>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textoMargin: {
    marginBottom: 5,
  },
});

export default Routing;
