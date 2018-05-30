//import liraries
import React, { Component } from 'react';
import { View,ScrollView, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { blur, change } from 'redux-form';
import SignUpForm from './Forms/SignUpForm';
import { actionRegistro, actionCargarImagenSignUp, actionLimpiarImagenSignUp } from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';
import CONSTANTES from '../../Store/CONSTANTES';

// create a component
class SignUp extends Component {
    componentWillUnmount(){
        this.props.limpiarImagen();
    }
    registroDeUsuario = (values) =>{
        this.props.registro(values);
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
            <SeleccionarImagen 
            imagen={this.props.imagen.imagen} 
            cargar={this.props.cargarImagen} />
                <SignUpForm registro={this.registroDeUsuario}
                imagen={this.props.imagen.imagen} />
                <Button
                title='Regresar'
                onPress={() => { navigation.goBack()}}
                />
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20
    },
});

const mapStateToProps = state => {
    return {
        numero: state.reducerPrueba,
        imagen: state.reducerImagenSignUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registro: (values) => {
            dispatch(actionRegistro(values));     
        },
        cargarImagen: (imagen) => {
            dispatch(actionCargarImagenSignUp(imagen));
            dispatch(blur('SignUpForm', 'imagen', Date.now()));
        },
        limpiarImagen: () => {
            dispatch(actionLimpiarImagenSignUp());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
