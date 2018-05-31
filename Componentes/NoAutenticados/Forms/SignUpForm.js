import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../../Store/Servicios/Firebase';

const fieldNombre = props => {
return (    
        <View style={styles.textInput}>
            <TextInput style={styles.campos}
            placeholder={props.ph}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.input.name === 'correo'? 'email-address': 'default'}
            autoCapitalize='none'
            secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmarPassword')}
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
    if(!values.nombre){
        errors.nombre = 'requerido';
    } else if (values.nombre.length < 3){
        errors.nombre = 'Deben ser al menos 3 caracteres';
    } else if (values.nombre.length > 10){
        errors.nombre = 'Debe ser menor de 10 caracteres';
    }

    if(!values.correo){
        errors.correo = 'requerido';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = 'Ingrese un correo válido';
    }

    if(!values.password){
        errors.password = 'requerido';
    } else if (values.password.length <= 5){
        errors.password = 'Debe ser mayor de 5 caracteres';
    }else if (values.password.length > 10){
        errors.password = 'Debe ser menor de 10 caracteres';
    }

    if(!values.confirmarPassword){
        errors.confirmarPassword = 'requerido';
    } else if (values.confirmarPassword != values.password){
        errors.confirmarPassword = 'Debe ser igual a la contraseña';
    }

    return errors;
}

const SignUpForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name="imagen" component={fieldImagen} />
            <Field name="nombre" component={fieldNombre} ph='nombre'/>
            <Field name="correo" component={fieldNombre} ph='correo@correo.com'/>
            <Field name="password" component={fieldNombre} ph='*******'/>
            <Field name="confirmarPassword" component={fieldNombre} ph='*******'/>
            <Button
                title='Registrar'
                onPress={props.handleSubmit(props.registro)}
                />
            <Field name="usuarioCreado" component={fieldUsuarioYaCreado} />
                
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

export default reduxForm({form: 'SignUpForm',
 validate
})(SignUpForm);