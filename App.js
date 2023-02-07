import { HomeScreen, ItemScreen } from './src/components';
import { MainContext } from './src/MainContext';

import React, { Component, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// const url = 'http://api.tvmaze.com/search/shows?q=stargate'
const url = 'http://api.tvmaze.com/search/shows?q='

const App = () => {
    // const [title, setTitle] = useState('STARGATE');
    const [data, setData] = useState([]);
    const [id_item, setIdItem] = useState(0);
    const [search, setSearch] = useState('stargate');    // строка поиска
    // const [start_load, setStartLoad] = useState(true);   // включение первоначальной загрузки данных

    useEffect(() => {
        // console.log('App---'+search);
        // console.log('App---'+start_load);
        // if (!start_load) return ;
        if (search.length <= 3) return;
        // console.log('App---'+url+search);
        try {
            fetch( url+search, { method: 'Get'})
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    // setStartLoad(false);
                });
        } catch (error) {
            console.warn('error', error);
            throw error;
        }    
    }, [search]);

    const Stack = createNativeStackNavigator();

    return (
        <MainContext.Provider
            value={{
                data: data,
                id_item: id_item,
                set_id: setIdItem,
                search: search,
                setSearch: setSearch,
            }}
        >
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        // headerStyle: {
                        //     backgroundColor: '#A8D2FF',
                        // },
                        // headerTintColor: '#636362',
                        // headerTitleStyle: {
                        //     fontWeight: 'bold',
                        // },
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} 
                        options={{ 
                            // title: title,
                        }}/>
                    <Stack.Screen name="Item" component={ItemScreen} 
                        options={{ 
                            // title: title,
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </MainContext.Provider>
    );
}

export default App;







// export default class App extends Component {

//     state = {
//         title: 'STAR GATE',
//         data: [],
//         id_item: 0,
//         set_id_item: (id) => this.setState({id_item: id}),
//     }

//     componentDidMount = async() => {
//         try {
//             const response = await fetch( url, { method: 'Get'});
//             const data = await response.json();
//             this.setState({data});
//         } catch (error) {
//             console.warn('error', error);
//             throw error;
//         }
        
//     }

//     render() {
//         const Stack = createNativeStackNavigator();
//         const { title, data } = this.state
//         // console.log(data);

//         return (
//             <MainContext.Provider
//                 value={
//                     this.state
//                     // {
//                         // data: data,
//                     //     test: 'it really work!',
//                     //     id_item: undefined,
//                     // }
//                 }
//             >
//                 <NavigationContainer>
//                     <Stack.Navigator
//                         initialRouteName="Home"
//                         screenOptions={{
//                             headerStyle: {
//                                 backgroundColor: '#A8D2FF',
//                             },
//                             headerTintColor: '#636362',
//                             headerTitleStyle: {
//                                 fontWeight: 'bold',
//                             },
//                         }}
//                     >
//                         <Stack.Screen name="Home" component={HomeScreen} 
//                             options={{ 
//                                 title: title,
//                             }}/>
//                         <Stack.Screen name="Item" component={ItemScreen} 
//                             options={{ 
//                                 title: title,
//                             }}/>
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             </MainContext.Provider>
//         );
//     }
// }


