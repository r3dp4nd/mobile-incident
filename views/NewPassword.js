import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  H1,
  Input,
  Item,
  Text,
  Toast,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import globalStyles from '../styles/global';
import { useDispatch } from 'react-redux';
import { updatePasswordAction } from '../actions/authActions';

const NewPassword = () => {
  const dispatch = useDispatch();

  // Rutendo
  const navigation = useNavigation();

  // Seteando estados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const submitForm = () => {
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      newPassword.trim() === ''
    ) {
      setMensaje('Todos los campos son obligatorios');
      console.log(mensaje);
      showToast();
      return;
    }

    // Password al menos 6 caracteres
    if (newPassword.length < 6) {
      setMensaje('Su nueva contraseña debe de ser de almenos 6 caracteres');
      showToast();
      return;
    }

    const user = { username: username.toLowerCase(), password, newPassword };

    // enviar
    dispatch(updatePasswordAction(user));

    setUsername('');
    setPassword('');
    setNewPassword('');
    
    navigation.navigate('Login');
  };

  const showToast = () => {
    if (mensaje) {
      Toast.show({
        text: mensaje,
        duration: 3000,
        type: 'warning',
      });
    }
  };

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: '#2d3d54' }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={[globalStyles.titulo, { color: '#FFF' }]}>
          Cambiar Contraseña
        </H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Correo Electronico"
              value={username}
              onChangeText={(texto) => setUsername(texto)}
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Anterior Password"
              value={password}
              onChangeText={(texto) => setPassword(texto)}
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Nuevo Password"
              value={newPassword}
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
