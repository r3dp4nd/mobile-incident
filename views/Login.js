import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Form, H1, Input, Item, Text } from "native-base";
import { View } from "react-native";
import globalStyles from "../styles/global";

const Login = () => {
  // React Navigation
  const navigation = useNavigation();

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: "#e84347" }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>Login</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>

        <Button block square style={globalStyles.boton}>
          <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
        </Button>

        <Text
          onPress={() => navigation.navigate("Incident")}
          style={globalStyles.enlace}
        >
          Cambiar Password
        </Text>
      </View>
    </Container>
  );
};

export default Login;
