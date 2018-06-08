import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

const SeleccionarImagen = (props) => {
  const seleccionarImagen = async () => {
    await askPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result);

        if (!result.cancelled) {
          props.cargar(result);
        }
      };

      console.log(props.radius);
      const radius = { borderRadius: props.radius ? 0 : 80 };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={seleccionarImagen} >
    {
      props.imagen ? 
      (<Image source={{uri: props.imagen.uri}} style={{width:160, height:160, ...radius}} />) :
      (<Image source={require('../assets/user.png')} style={{width:160, height:160, ...radius}} />)
    }
      
    </TouchableOpacity>
    </View>
  );
};


askPermissionAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
};

export default SeleccionarImagen;