import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Alert
} from 'react-native';
import { List, ListItem, SearchBar, Tile } from "react-native-elements";
import NoResults from '../helpers/no-results';
import LoadingSpinner from '../helpers/loading-spinner';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    flatListItem: {
        borderBottomWidth: 0,
        backgroundColor: 'white'
    },

    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    },

    footer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    }
});

class PersonsScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            data: [],
            filteredData: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount(){
        this.makeRemoteRequest();
    }

    _searchFilter(text) {
        this.state.filteredData && this.setState({
            filteredData: this.state.data.length && this.state.data.filter(item => {
                return item.name.first.includes(text) || item.name.last.includes(text) || item.email.includes(text);
            })
        });
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    filteredData: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    }

    renderSeparator = () => {
        return (
            <View
                style={styles.separator}
            />
        );
    }

    renderHeader = () => {
        return <SearchBar
            placeholder="Type Here..."
            lightTheme round
            onChangeText={input => this._searchFilter(input)}
            onClearText={() => Alert.alert('Function onClearText')}
        />;
    }

    renderFooter = () => {
        return (<LoadingSpinner loading={this.state.loading} style={styles.footer}/>);
    }

    _openPersonDetail = (person) => {
        let navigation = this.props.navigation;
        navigation.navigate('PersonDetail', {person});
    }

    render() {
        return (
            <View 
                containerStyle={styles.container}
            >
                <FlatList
                    data={this.state.filteredData}
                    renderItem={ ({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail}}
                            onPress={ () => this._openPersonDetail(item) }
                            containerStyle={styles.flatListItem}
                        />
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={ this.renderSeparator }
                    ListHeaderComponent={ this.renderHeader }
                    ListFooterComponent={ this.renderFooter }
                />
                {!this.state.filteredData.length && !this.state.loading && <NoResults />}
            </View>
        );
    }
}

export default PersonsScreen;