import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native';
import { w } from '../../../constants';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        width: w / 2.5,
        // height: w * .6
        // backgroundColor: 'yellow',
    },
    cover: {
        marginTop: 20,
        resizeMode: 'contain',
        // width: w / 2.1,
        height: w * .6,
        borderRadius: 5,
        justifyContent: 'center',
    },
    title: {
        paddingTop: 6,
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

const ImageCard = ({ data }) => {
    const { container, cover, title } = styles
    const { name, image } = data.show

    return (
        <View style={container}>
            {((image !== null) && (image !== undefined)) 
                ? <Image style={cover} source={{uri: image.medium}} />
                : <Icon style={cover} name='film' type='font-awesome' size={100} color='#b0b0b0'/>
            }
            <Text style={ title }>{ name }</Text>
        </View>
    )
}

export { ImageCard }