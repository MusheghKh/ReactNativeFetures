import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { VisibilityFilters } from '../../actions/todo/actionTypes';
import { capitalize } from '../../helpers/custom-helper-functions';

class Filters extends Component {
  render() {
    return (
      <View style={styles.bar}>
        {this.renderFilters()}
      </View>
    );
  }

  renderFilters() {
    let {showAll, showCompleted, showIncomplete, activeFilter} = this.props;
    return [
      {name: VisibilityFilters.ALL, action: showAll},
      {name: VisibilityFilters.COMPLETED, action: showCompleted},
      {name: VisibilityFilters.INCOMPLETE, action: showIncomplete}
    ].map(filter => {
      let style = [styles.button];
      let textStyle = [styles.text];
      if (activeFilter === filter.name) {
        style.push(styles.tabActive);
        textStyle.push(styles.textActive);
      }
      return (
        <TouchableOpacity
          key={filter.name}
          style={style}
          onPress={filter.action}>
          <Text style={textStyle}>{capitalize(filter.name)}</Text>
        </TouchableOpacity>
      )
    });
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#f1f1eb',
    flexDirection: 'row'
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  text: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tabActive: {
    backgroundColor: '#e9e9ef'
  },
  textActive: {
    color: '#81c04d'
  }
})

export default Filters;