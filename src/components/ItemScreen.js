import {MainContext} from '../MainContext';
import {w, h, mainBackground} from '../../constants';

import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Rating, Icon, Image} from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: w * .9,
        height: h * .6,
        // backgroundColor: 'yellow',
    },
    cover: {
        height: h * .6,
        justifyContent: 'center',
    },
    premiered: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
    },
    stars: {
        padding: 10,
    },
    summary: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: 'justify',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 16,
    },

})

const ItemScreen = props => {
    
    const thisContext = useContext(MainContext);
    const {data, id_item} = thisContext;
    const item = data.find(item => (item.show.id == id_item));    
    const {container, cover, overview, stars, premiered, summary} = styles;
    // const [item, setItem] = useState(
                                // thisContext.data.find(item => (item.show.id == thisContext.id_item))    
                            // );
    // console.log(item);

    const [img_width, setWidth] = useState(100);
    const [img_height, setHeight] = useState(100);

    // заглушка на случай если картинки нет
    let image = <Icon style={cover} 
                    name='film' 
                    type='font-awesome' 
                    size={200} 
                    color='#b0b0b0'/>

    // если картинка есть - меняем ранее созданный элемент
    if ((item.show.image !== null) && (item.show.image !== undefined)) {
        Image.getSize(item.show.image.original, (Width, Height) => {
            const ratio = Height/Width;
            const new_height = h * .6;
            setWidth(Math.floor(new_height / ratio));
            setHeight(Math.floor(new_height));
        }, (errorMsg) => {
            console.log(errorMsg);
        });

        image = <Image style={{
                            flex: 1,
                            width: img_width,
                            height: img_height,
                            borderRadius: 10,
                            alignContent: 'center',
                            alignItems: 'center',
                        }} 
                        source={{uri: item.show.image.original}} 
                        PlaceholderContent={<ActivityIndicator size='large' color='#f2c400'/>}
                        placeholderStyle={{
                            backgroundColor: 'transparent',
                        }} 
                />;
    }; 

    if ((item.show.summary !== null) && (item.show.summary !== undefined)) 
        item.show.summary = item.show.summary.replace(/<[^>]+>/g,'');

    return (
        <SafeAreaView style={{backgroundColor: mainBackground}}>
            <ScrollView>
                <View style={container}>
                    {image}
                </View>
                <Rating
                    readonly={true}
                    showReadOnlyText={false}
                    startingValue={item.show.rating.average}
                    ratingCount={10}
                    fractions={1}
                    showRating
                    imageSize={30}
                    tintColor={mainBackground}
                    style={stars}
                />
                <Text style={premiered}> Премьера: {item.show.premiered}</Text>
                <Text style={summary}>{item.show.summary}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export { ItemScreen }



