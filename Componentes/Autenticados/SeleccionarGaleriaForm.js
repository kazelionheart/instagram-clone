import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => {
return (    
        <View style={styles.textInput}>
            <TextInput style={styles.campos}
            placeholder={props.ph}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType="default"
            autoCapitalize='none'
            onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}> {props.meta.error}</Text>}
        </View>
    );
};

const fieldImagen = props => <View>
        <View>
        {props.meta.touched && props.meta.error && <Text style={styles.errors}> {props.meta.error}</Text>}
        </View>
    </View>;

const fieldUsuarioYaCreado = props => <View>
        <View>
        {props.errorMsg && <Text style={styles.errors}> {props.errorMsg}</Text>}
        </View>
    </View>;

const validate = (values) => {
    const errors = {};
    if(!values.imagen){
        errors.imagen = 'La foto es requerida';
    }
    if(values.texto && !values.texto.length > 140){
        errors.texto = 'Debe ser menor de 10 caracteres';
    }

    return errors;
}

const SeleccionarGaleriaForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name="imagen" component={fieldImagen} />
            <Field name="texto" component={fieldNombre} ph='texto'/>
            <Button
                title='Registrar'
                onPress={props.handleSubmit(props.registro)}
                />               
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: 10
    },
    textInput:{
        marginBottom: 16,
    },
    linea:{
        backgroundColor: '#DCDCDC',
        height: 2
    },
    errors: {
        color: '#FF0000'
    },
    campos:{
        fontSize: 20
    }
});

export default reduxForm({form: 'SeleccionarGaleriaForm',
 validate
})(SeleccionarGaleriaForm);