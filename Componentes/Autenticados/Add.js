//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Add extends Component {
    render() {
        const { navigation } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Button
                title='Seleccionar galería'
                onPress={()=>{ navigation.navigate('Seleccion'); } }
                />
                <Button
                title='Tomar foto'
                onPress={()=>{ navigation.navigate('Seleccion'); } }
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
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
});

//make this component available to the app
export default Add;
