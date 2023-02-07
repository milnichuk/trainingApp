import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

const Layout = props => {
    const { container } = styles;

    return (
        // <ScrollView>
            <View style={ container }>{ props.children }</View>
        // </ScrollView>
    )
}

export { Layout }