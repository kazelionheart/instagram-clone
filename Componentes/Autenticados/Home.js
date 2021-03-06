//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                title='Autor'
                onPress={() => { navigation.navigate('Autor')}}
                />
                <Button
                title='Comentarios'
                onPress={() => { navigation.navigate('Comentarios')}}
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
export default Home;
