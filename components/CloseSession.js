import React from 'react';
import { Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { resetRoutingAction } from '../actions/routingActions';
import { resetAuthAction } from '../actions/authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CloseSession = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = async () => {
    dispatch(resetRoutingAction());
    dispatch(resetAuthAction());
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  return (
    <Text
      style={{
        marginRight: 20,
        color: 'red',
      }}
      onPress={() => handlePress()}
    >
      Cerrar Sesión
    </Text>
  );
};

export default CloseSession;
