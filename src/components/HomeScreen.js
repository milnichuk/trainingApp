import { ImageCard, Layout} from './uikit';
import { mainBackground } from '../../constants';
import { MainContext } from '../MainContext';

import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';

const HomeScreen = props => {
    
    const thisContext = useContext(MainContext);
    const {data, set_id, search, setSearch} = thisContext;
    const {navigation} = props;

    // console.log('----------HomeScreen------------');
    // console.log(data);
    // console.log(id_item);
    // console.log(navigation);
    // console.log('----------------------');
    
    function onPressItem (key) {
        set_id(key);     
        navigation.navigate('Item');
    }
    // const onPressItem = (key) => console.log(key);  // альтернативный вариант

    function updateSearch (search) {
        setSearch(search);
        // console.log('Home---'+search);
        // startLoad(true);
        // console.log('Home---'+start_load);
    };

    return (
        <SafeAreaView style={{backgroundColor: mainBackground}}>
            <ScrollView>

                <SearchBar
                    placeholder='Название фильма (eng)...'
                    onChangeText={updateSearch}
                    value={search}
                    round='true'
                />

                <Layout>
                    {data.map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => onPressItem(item.show.id)}  
                        >
                            <ImageCard data={item}/>
                        </TouchableOpacity>
                    ))}
                </Layout>
            </ScrollView>
        </SafeAreaView>
    )
}

export { HomeScreen }

