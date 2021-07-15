import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Container,
  Form,
  Item,
  Picker,
  Textarea,
  Text,
  Content,
  Toast,
} from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registerIncidentActions } from '../actions/incidentActions';
import globalStyles from '../styles/global';

const typeVehicle = [
  { id: 1, label: 'Caja de cambios' },
  { id: 2, label: 'Neumaticos' },
  { id: 3, label: 'Motor' },
  { id: 4, label: 'Frenos' },
  { id: 5, label: 'Falla mecanica' },
  { id: 6, label: 'Tanque de cisterna' },
];

const typeDriver = [
  { id: 7, label: 'Perdida de tiempo' },
  { id: 8, label: 'Fuera de comunicacion' },
];

const typeOperation = [
  { id: 9, label: 'Accidente de vehiculo' },
  { id: 10, label: 'Exceso de velocidad' },
  { id: 11, label: 'Mala maniobra' },
  { id: 12, label: 'Inprudencia del peaton' },
  { id: 13, label: 'Mal estado de la pista' },
];

const Incident = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const routing = useSelector((state) => state.routings.routing);

  const [categoryIncident, setCategoryIncident] = useState(0);
  const [typeIncident, setTypeIncident] = useState(0);
  const [incidentDescription, setIncidentDescription] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = () => {
    if (
      categoryIncident === 0 ||
      typeIncident === 0 ||
      incidentDescription.trim() === ''
    ) {
      setMensaje('Seleccionar las caracteristicas y llenar la descripcion');
      showToast();
      return;
    }

    const incidente = {
      codRouting: routing.codRouting,
      categoryIncident,
      typeIncident,
      incidentDescription,
    };

    // PReparando para enviar

    // dispatch(registerIncidentActions(incidente));

    setCategoryIncident(0);
    setTypeIncident(0);
    setIncidentDescription('');

    navigation.navigate('Routing');
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

  if (!routing) return null;

  return (
    <Container
      style={[globalStyles.contenedor, { backgroundColor: '#efefef' }]}
    >
      <View style={globalStyles.formulario}>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Picker
              note
              mode="dropdown"
              style={{ height: 50 }}
              selectedValue={categoryIncident}
              onValueChange={(value) => setCategoryIncident(value)}
            >
              <Picker.Item label="-- Seleccionar Categoria --" value={0} />
              <Picker.Item label="Vehiculo" value={1} />
              {/* <Picker.Item label="Conductor" value={2} /> */}
              <Picker.Item label="Transito" value={3} />
            </Picker>
          </Item>

          <Item inlineLabel last style={globalStyles.input}>
            <Picker
              note
              mode="dropdown"
              style={{ height: 50 }}
              onValueChange={(value) => setTypeIncident(value)}
            >
              <Picker.Item label="-- Seleccionar Categoria --" value={0} />
              {categoryIncident === 1
                ? typeVehicle.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.label}
                      value={item.id}
                    />
                  ))
                : null}

              {categoryIncident === 2
                ? typeDriver.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.label}
                      value={item.id}
                    />
                  ))
                : null}

              {categoryIncident === 3
                ? typeOperation.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.label}
                      value={item.id}
                    />
                  ))
                : null}
            </Picker>
          </Item>

          <Textarea
            rowSpan={5}
            bordered
            placeholder="Ingrese la descripcion de la incidencia"
            onChangeText={(texto) => setIncidentDescription(texto)}
          ></Textarea>
        </Form>

        <Button
          block
          square
          style={globalStyles.boton}
          onPress={() => handleSubmit()}
        >
          <Text style={globalStyles.botonTexto}>Enviar</Text>
        </Button>
      </View>
    </Container>
  );
};

export default Incident;
