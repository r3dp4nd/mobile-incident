import { useNavigation } from '@react-navigation/native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H1,
  H2,
  Text,
  Fab,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  endUpdateTimeAction,
  startUpdateTimeAction,
} from '../actions/routingActions';
import globalStyles from '../styles/global';

const Routing = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const usuario = useSelector((state) => state.auths.usuario);
  const routing = useSelector((state) => state.routings.routing);


  const writeIncident = () => {
    navigation.navigate('Incident');
  };

  const convertDateFormat = (string) => {
    const fecha = new Date(string);
    // const info = string.split('-');
    return `${fecha.toLocaleDateString()} - ${fecha.toLocaleTimeString()}`;
    // return info[2] + '/' + info[1] + '/' + info[0];
  };

  if (!usuario) return null;
  if (!routing)
    return (
      <Content style={{ backgroundColor: '#efefef', marginHorizontal: '2.5%' }}>
        <Card style={{ height: 300 }}>
          <H1 style={globalStyles.titulo}>
            Bienvenido: {`${usuario.name} ${usuario.lastName}`}
          </H1>

          <H2
            style={{
              marginTop: 75,
              textAlign: 'center',
            }}
          >
            No tiene ninguna ruta activa
          </H2>
        </Card>
      </Content>
    );

  const { codRouting, codRoute, routingStartDate, routingEndDate } = routing;

  const startRouting = () => {
    dispatch(startUpdateTimeAction(codRouting));
    console.log('Iniciando Ruta');
  };

  const endRouting = () => {
    dispatch(endUpdateTimeAction(codRouting));
    console.log('Terminando Ruta');
  };

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
            disabled={routingStartDate ? true : false}
            style={styles.buttons}
            onPress={() => startRouting()}
          >
            <Text>Iniciar</Text>
          </Button>
          <Button
            rounded
            style={styles.buttons}
            disabled={routingStartDate ? false : true}
            onPress={() => endRouting()}
          >
            <Text>Terminar</Text>
          </Button>
          <Button
            rounded
            danger
            disabled={routingStartDate ? false : true}
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
