import React from "react";
import { Button, Container, Form, H1, Input, Item, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import globalStyles from "../styles/global";

const NewPassword = () => {
  const navigation = useNavigation();
  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: "#e84347" }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>Cambiar Contraseña</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Email"
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Anterior Password"
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Nuevo Password"
            />
          </Item>
        </Form>

        <Button
          block
          square
          style={globalStyles.boton}
        >
          <Text style={globalStyles.botonTexto}>Enviar</Text>
        </Button>

      </View>
    </Container>
  );
};

export default NewPassword;
