import { useNavigation } from '@react-navigation/native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H1,
  Text,
  Fab,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import globalStyles from '../styles/global';

const Routing = () => {
  const navigation = useNavigation();

  const usuario = useSelector((state) => state.auths.usuario);
  const routing = useSelector((state) => state.routings.routing);
  // console.log(routing, 'desde routing');
  // console.log(usuario);

  const startRouting = () => {
    console.log('Iniciando Ruta');
  };

  const endRouting = () => {
    console.log('Terminando Ruta');
  };

  const writeIncident = () => {
    navigation.navigate('Incident');
    console.log('Enviando a incidente');
  };

  const convertDateFormat = (string) => {
    const info = string.substring(0, 10).split('-');
    // const info = string.split('-');
    return info[2] + '/' + info[1] + '/' + info[0];
  };

  if (!usuario) return null;
  if (!routing) return null;

  const { codRouting, codRoute, routingStartDate, routingEndDate } = routing;

  return (
    <Content style={{ backgroundColor: '#efefef', marginHorizontal: '2.5%' }}>
      <Card>
        <H1 style={globalStyles.titulo}>
          Bienvenido: {`${usuario.name} ${usuario.lastName}`}
        </H1>
        <CardItem>
          <Body>
            <Text style={styles.textoMargin}>Ruta: {codRouting}</Text>
            <Text style={styles.textoMargin}>
              Direccion: {codRoute.direction1}
            </Text>
            <Text style={styles.textoMargin}>
              Vehiculo: {codRoute.codVehicle.vehiclePlate}{' '}
            </Text>
            <Text style={styles.textoMargin}>
              Material: {codRoute.typeOfMaterial.description}{' '}
            </Text>
            <Text style={styles.textoMargin}>
              Inicio:{' '}
              {routingStartDate ? convertDateFormat(routingStartDate) : ''}
            </Text>
            <Text style={styles.textoMargin}>
              Termino: {routingEndDate ? convertDateFormat(routingEndDate) : ''}
            </Text>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textoMargin: {
    marginBottom: 5,
  },
});

export default Routing;
