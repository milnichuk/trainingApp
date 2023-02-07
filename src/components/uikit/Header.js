import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#33b89f',
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 5,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpasity: 0.2,
        elevation: 2,
        position: 'relative',

    },

    textStyle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold',

    }
})

const Header = props => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    )
}

export { Header }