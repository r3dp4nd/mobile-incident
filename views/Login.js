import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Form, H1, Input, Item, Text } from 'native-base';
import { View } from 'react-native';
import globalStyles from '../styles/global';
import { loginActions } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  // React Navigation
  const navigation = useNavigation();

  const autenticado = useSelector(state => state.auths.autenticado)

  useEffect(() => {
    if (autenticado) {
      navigation.navigate('Routing');
    }
  }, [autenticado])

  // Seteando estados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const submitForm = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setMensaje('Ingrese su correo electronico y su contraseña');
      console.log('campos vacios');
      return;
    }

    const user = { username: username.toLowerCase(), password };

    // enviar
    console.log(user, 'Datos del usuario');

    dispatch(loginActions(user));

    // navigation.navigate('Routing');

    setUsername('');
    setPassword('');
  };

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: '#2d3d54' }]}
    >
      <View style={globalStyles.contenido}>
        <H1 style={[globalStyles.titulo, { color: '#FFF' }]}>
          Aplicacion de Incidencias D&D
        </H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Correo Electronico"
              onChangeText={(texto) => setUsername(texto)}
              value={username}
            />
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(texto) => setPassword(texto)}
              value={password}
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
          onPress={() => navigation.navigate('NewPassword')}
          style={globalStyles.enlace}
        >
          Cambiar Password
        </Text>
      </View>
    </Container>
  );
};

export default Login;
