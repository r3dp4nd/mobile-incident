import React, { useState } from "react";
import { Button, Container, Form, H1, Input, Item, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import globalStyles from "../styles/global";

const NewPassword = () => {
  // Rutendo
  const navigation = useNavigation();

  // Seteando estados
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const submitForm = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      newPassword.trim() === ""
    ) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    // Password al menos 6 caracteres
    if (newPassword.length < 6) {
      setMensaje("Su nueva contraseña debe de ser de almenos 6 caracteres");
      return;
    }

    const user = { username, password, newPassword };

    // enviar
    console.log(user, "Actualizando Contraseña");

    setUsername("");
    setPassword("");
  };

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: "#2d3d54" }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>Cambiar Contraseña</H1>

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
              placeholder="Anterior Password"
              onChangeText={(texto) => setPassword(texto)}
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Nuevo Password"
              onChangeText={(texto) => setNewPassword(texto)}
            />
          </Item>
        </Form>

        <Button
          block
          square
          style={globalStyles.boton}
          onPress={() => submitForm()}
        >
          <Text style={globalStyles.botonTexto}>Enviar</Text>
        </Button>
      </View>
    </Container>
  );
};

export default NewPassword;
