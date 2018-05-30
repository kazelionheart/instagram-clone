//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Forms/SignInForm';
import { actionLogin } from '../../Store/ACCIONES';


// create a component
class SignIn extends Component {
    signInDeUsuario = (values) =>{
        this.props.login(values);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignInForm login= {this.signInDeUsuario} />
                <Button
                title='Registrar'
                onPress={() => { navigation.navigate('SignUp')}}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (datos) => {
            dispatch(actionLogin(datos))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
