import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Form, H1, Input, Item, Text } from "native-base";
import { View } from "react-native";
import globalStyles from "../styles/global";

const Login = () => {
  // React Navigation
  const navigation = useNavigation();

  // Seteando estados
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const submitForm = () => {
    if (username.trim() === "" || password.trim() === "") {
      setMensaje("Su nueva contraseña debe de ser de almenos 6 caracteres");
      return;
    }

    const user = { username, password };

    // enviar
    console.log(user, "Datos del usuario");

    setUsername("");
    setPassword("");
  };

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: "#2d3d54" }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={[globalStyles.titulo, { color: "#FFF" }]}>Login</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Correo Electronico"
              onChangeText={(texto) => setUsername(texto)}
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(texto) => setPassword(texto)}
            />
          </Item>
        </Form>

        <Button
          block
          square
          style={globalStyles.boton}
          onPress={() => submitForm()}
        >
          <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
        </Button>

        <Text
          onPress={() => navigation.navigate("Routing")}
          style={globalStyles.enlace}
        >
          Cambiar Password
        </Text>
      </View>
    </Container>
  );
};

export default Login;
