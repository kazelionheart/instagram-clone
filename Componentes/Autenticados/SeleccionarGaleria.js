//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SeleccionarImagen from '../SeleccionarImagen';
import { connect } from 'react-redux';
import { actionCargarImagenPublicacion  } from '../../Store/ACCIONES';

// create a component
class SeleccionarGaleria extends Component {
    static navigationOptions = {
        tabBarVisible: false,
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagen}>
                    <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius />
                </View>
                <View style={styles.texto}>
                    <Text>SeleccionarGaleria</Text>
                </View>
                <View style={styles.boton}>
                    <Button 
                    title="Publicar"
                    onPress={() => { console.log("Publicando...")}}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    imagen: {
        flex: 2
    },
    texto: {
        flex: 2
    },
    boton: {
        flex: 1
    }
});

//make this component available to the app
const mapStateToProps = (state) => {
    return {
        imagen: state.reducerImagenPublicacion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cargarImagen: (imagen) => {
            dispatch(actionCargarImagenPublicacion(imagen))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
