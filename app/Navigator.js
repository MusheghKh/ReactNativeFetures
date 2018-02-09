import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';	

import PersonsScreen from './containers/PersonsScreen';
import AllContactsScreen from './containers/AllContactsScreen';
import ChatScreen from './containers/ChatScreen';
import DetailPersonScreen from './containers/DetailPersonScreen';
import TimePickerScreen from './containers/TimePickerScreen';
import SettingsScreen from './containers/SettingsScreen';
import TodosScreen from './containers/TodosScreen';

const DrawerNav = DrawerNavigator({
    Persons: { 
        screen: PersonsScreen,
        navigationOptions: {
            title: "Persons",
            drawerLabel: "Persons"
        }
    },
    AllContacts: { 
        screen: AllContactsScreen,
        navigationOptions: {
            title: "All  Contacts",
            drawerLabel: "All Contacts"
        }
    },
    TimePicker: {
        screen: TimePickerScreen,
        navigationOptions: {
            title: "Time Picker",
            drawerLabel: "Time Picker"
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: "Settings",
            drawerLabel: "Settings"
        }
    },
    Todos: {
        screen: TodosScreen,
        navigationOptions: {
            title: "TODO List",
            drawerLabel: "TODO List"
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