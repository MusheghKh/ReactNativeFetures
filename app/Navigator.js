import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';	

import PersonsScreen from './PersonsScreen';
import AllContactsScreen from './AllContactsScreen';
import ChatScreen from './ChatScreen';
import DetailPersonScreen from './DetailPersonScreen';
import TimePickerScreen from './TimePickerScreen';

const DrawerNav = DrawerNavigator({
    Recent: { 
        screen: PersonsScreen,
        navigationOptions: {
            title: "Recent",
            drawerLabel: "Recent",
        } 
    },
    AllContacts: { 
        screen: AllContactsScreen,
        navigationOptions: {
            title: "All  Contacts",
            drawerLabel: "All Contacts",
        },  
    },
    TimePicker: {
        screen: TimePickerScreen,
        navigationOptions: {
            title: "Time Picker",
            drawerLabel: "Time Picker",
        }
    }
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
    },
});

const MainStack = StackNavigator({
    Drawer: { 
        screen: DrawerNav,
        navigationOptions:({navigation}) => ({
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Icon name="rocket" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    PersonDetail: {
        screen: DetailPersonScreen
    },
    Chat: {
        screen: ChatScreen,
    }
});

export default MainStack;